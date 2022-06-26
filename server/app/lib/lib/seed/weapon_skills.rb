module Lib
  module Seed
    # Code for filling up our database.
    class WeaponSkills

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

        self.compatibility_data = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "weapon-skill-compatibility.tsv"))
      end

      # @return [void]
      def seed()
        # Weapon.destroy_all()
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

          weapon_skill_weapon_affinities_attributes: [],
          weapon_skill_weapon_types_attributes:      [],
        }

        output[:ash_of_war] = (input["ash_of_war"] == true || input["ash_of_war"] == "TRUE" || input["ash_of_war"] == "true")

        # output[:can_be_applied_to] = (input["can_be_applied_to"] || "").split(/,\s*/)

        output[:metadata] = {
          basic_fp_cost:   input["basic_fp_cost"].to_i(),
          complex_fp_cost: input["FP"],
        }

        # TODO: confirm 1,853 total compatibilities across type and affinity.
        if output[:ash_of_war]
          # binding.pry
          compatibility = self.compatibility_data.find { |x| x["name"] == input["name"] }

          self.weapon_affinity_ids.each do |key, value|
            if compatibility[key] == true
              output[:weapon_skill_weapon_affinities_attributes] << { weapon_affinity_id: value }
            end
          rescue StandardError => error
            binding.pry
            # return output
          end

          self.weapon_type_ids.each do |key, value|
            if compatibility[key] == true
              output[:weapon_skill_weapon_types_attributes] << { weapon_type_id: value }
            end
          end
        end

        return output
      # rescue StandardError => error
      #   binding.pry
      #   return output
      end

    end
  end
end
