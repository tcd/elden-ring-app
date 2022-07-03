module Lib
  module Seed
    # Code for filling up our database.
    class StartingClasses

      # @!attribute weapon_ids
      #   @return [Hash{String => Integer}]
      attr_accessor :weapon_ids

      # @!attribute armor_ids
      #   @return [Hash{String => Integer}]
      attr_accessor :armor_ids

      # @!attribute spell_ids
      #   @return [Hash{String => Integer}]
      attr_accessor :spell_ids

      # @return [void]
      def initialize()
        self.weapon_ids = {}
        self.armor_ids  = {}
        self.spell_ids  = {}

        Weapon.all.each { |x| self.weapon_ids[x.name] = x.id }
        Armor.all.each  { |x| self.armor_ids[x.name]  = x.id }
        Spell.all.each  { |x| self.spell_ids[x.name]  = x.id }
      end

      # @return [void]
      def seed()
        StartingClass.destroy_all()
        invalid = Lib::Seed.from_tsv("starting-classes.tsv", StartingClass) { |x| self.process(x) }
        return invalid
      end


      # @param input [Hash]
      # @return [Hash]
      def process(input)
        output = {
          id:          input["sort_order"],
          sort_order:  input["sort_order"],
          name:        input["name"],
          description: input["description"],

          level:        input["level"],
          vigor:        input["vigor"],
          mind:         input["mind"],
          endurance:    input["endurance"],
          strength:     input["strength"],
          dexterity:    input["dexterity"],
          intelligence: input["intelligence"],
          faith:        input["faith"],
          arcane:       input["arcane"],
        }

        output[:r1_id] = self.weapon_ids[input["R1"]] unless input["R1"].blank?
        output[:r2_id] = self.weapon_ids[input["R2"]] unless input["R2"].blank?
        output[:l1_id] = self.weapon_ids[input["L1"]] unless input["L1"].blank?
        output[:l2_id] = self.weapon_ids[input["L2"]] unless input["L2"].blank?

        output[:head_id]  = self.armor_ids[input["head"]]  unless input["head"].blank?
        output[:chest_id] = self.armor_ids[input["chest"]] unless input["chest"].blank?
        output[:arms_id]  = self.armor_ids[input["arms"]]  unless input["arms"].blank?
        output[:legs_id]  = self.armor_ids[input["legs"]]  unless input["legs"].blank?

        output[:spell_1_id] = self.spell_ids[input["spell_1"]] unless input["spell_1"].blank?
        output[:spell_2_id] = self.spell_ids[input["spell_2"]] unless input["spell_2"].blank?

        return output
      end

    end
  end
end

