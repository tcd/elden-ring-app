module Lib
  module Seed
    # Code for filling up our database.
    class WeaponSkills

      # @!attribute sort_order_data
      #   @return [Array<Hash>]
      attr_accessor :sort_order_data

      # @!attribute weapon_affinity_ids
      #   @return [Hash{String => Integer}]
      attr_accessor :weapon_affinity_ids

      # @!attribute weapon_type_ids
      #   @return [Hash{String => Integer}]
      attr_accessor :weapon_type_ids

      # @!attribute compatibility_data
      #   @return [Array<Hash>]
      attr_accessor :compatibility_data

      # @return [void]
      def initialize()
        self.weapon_affinity_ids = {}
        WeaponAffinity.all.each { |x| weapon_affinity_ids[x.name] = x.id }

        self.weapon_type_ids = {}
        WeaponType.all.each { |x| weapon_type_ids[x.name] = x.id }

        self.sort_order_data    = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "sort_order", "weapon-skills-sort-order.tsv"))
        self.compatibility_data = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "weapon-skill-compatibility.tsv"))
      end

      # @return [void]
      def seed()
        WeaponSkill.destroy_all()
        invalid = Lib::Seed.from_tsv("weapon-skills.tsv", WeaponSkill) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def process(input)
        output = {
          name:          input["name"],
          description:   input["Effect"],
          is_chargeable: input["is_chargeable"],
          ash_of_war:   (input["ash_of_war"] == true),

          weapon_skill_weapon_affinities_attributes: [],
          weapon_skill_weapon_types_attributes:      [],
        }

        output[:metadata] = {
          basic_fp_cost:   input["basic_fp_cost"].to_i(),
          complex_fp_cost: input["FP"],
        }

        process_joins(input, output)
        process_sorting(input, output)

        if output[:ash_of_war]
          output[:default_affinity_id] = self.weapon_affinity_ids[input["affinity"]]
        end

        return output
      end

      # @param input [Hash]
      # @param output [Hash]
      # @return [void]
      def process_joins(input, output)
        return nil unless output[:ash_of_war]
        compatibility = self.compatibility_data.find { |x| x["name"] == output[:name] }
        self.weapon_affinity_ids.each do |key, value|
          if compatibility[key] == true
            output[:weapon_skill_weapon_affinities_attributes] << { weapon_affinity_id: value }
          end
        end
        self.weapon_type_ids.each do |key, value|
          if compatibility[key] == true
            output[:weapon_skill_weapon_types_attributes] << { weapon_type_id: value }
          end
        end
      end

      # @param input [Hash]
      # @param output [Hash]
      # @return [void]
      def process_sorting(input, output)
        return nil unless output[:ash_of_war]

        sorting_data = self.sort_order_data.find { |x| x["name"] == output[:name] }

        sort_group = sorting_data["sort_group"]
        sort_order = sorting_data["sort_order"]

        output[:sort_group] = sort_group unless sort_group.blank?
        output[:sort_order] = sort_order unless sort_order.blank?
      end

    end
  end
end
