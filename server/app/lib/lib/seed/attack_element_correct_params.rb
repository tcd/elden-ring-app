module Lib
  module Seed
    # Code for filling up our database.
    class AttackElementCorrectParams

      # @return [void]
      def self.seed()
        # AttackElementCorrectParam.destroy_all()
        invalid = Lib::Seed.from_tsv("calculation/AttackElementCorrectParam.tsv", AttackElementCorrectParam) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {
          id: input["ID"],

          isStrengthCorrect_byPhysics:  (input["isStrengthCorrect_byPhysics"].to_s == "1"),
          isDexterityCorrect_byPhysics: (input["isDexterityCorrect_byPhysics"].to_s == "1"),
          isMagicCorrect_byPhysics:     (input["isMagicCorrect_byPhysics"].to_s == "1"),
          isFaithCorrect_byPhysics:     (input["isFaithCorrect_byPhysics"].to_s == "1"),
          isLuckCorrect_byPhysics:      (input["isLuckCorrect_byPhysics"].to_s == "1"),
          isStrengthCorrect_byMagic:    (input["isStrengthCorrect_byMagic"].to_s == "1"),
          isDexterityCorrect_byMagic:   (input["isDexterityCorrect_byMagic"].to_s == "1"),
          isMagicCorrect_byMagic:       (input["isMagicCorrect_byMagic"].to_s == "1"),
          isFaithCorrect_byMagic:       (input["isFaithCorrect_byMagic"].to_s == "1"),
          isLuckCorrect_byMagic:        (input["isLuckCorrect_byMagic"].to_s == "1"),
          isStrengthCorrect_byFire:     (input["isStrengthCorrect_byFire"].to_s == "1"),
          isDexterityCorrect_byFire:    (input["isDexterityCorrect_byFire"].to_s == "1"),
          isMagicCorrect_byFire:        (input["isMagicCorrect_byFire"].to_s == "1"),
          isFaithCorrect_byFire:        (input["isFaithCorrect_byFire"].to_s == "1"),
          isLuckCorrect_byFire:         (input["isLuckCorrect_byFire"].to_s == "1"),
          isStrengthCorrect_byThunder:  (input["isStrengthCorrect_byThunder"].to_s == "1"),
          isDexterityCorrect_byThunder: (input["isDexterityCorrect_byThunder"].to_s == "1"),
          isMagicCorrect_byThunder:     (input["isMagicCorrect_byThunder"].to_s == "1"),
          isFaithCorrect_byThunder:     (input["isFaithCorrect_byThunder"].to_s == "1"),
          isLuckCorrect_byThunder:      (input["isLuckCorrect_byThunder"].to_s == "1"),
          isStrengthCorrect_byDark:     (input["isStrengthCorrect_byDark"].to_s == "1"),
          isDexterityCorrect_byDark:    (input["isDexterityCorrect_byDark"].to_s == "1"),
          isMagicCorrect_byDark:        (input["isMagicCorrect_byDark"].to_s == "1"),
          isFaithCorrect_byDark:        (input["isFaithCorrect_byDark"].to_s == "1"),
          isLuckCorrect_byDark:         (input["isLuckCorrect_byDark"].to_s == "1"),

          overwriteStrengthCorrectRate_byPhysics:  input["overwriteStrengthCorrectRate_byPhysics"],
          overwriteDexterityCorrectRate_byPhysics: input["overwriteDexterityCorrectRate_byPhysics"],
          overwriteMagicCorrectRate_byPhysics:     input["overwriteMagicCorrectRate_byPhysics"],
          overwriteFaithCorrectRate_byPhysics:     input["overwriteFaithCorrectRate_byPhysics"],
          overwriteLuckCorrectRate_byPhysics:      input["overwriteLuckCorrectRate_byPhysics"],
          overwriteStrengthCorrectRate_byMagic:    input["overwriteStrengthCorrectRate_byMagic"],
          overwriteDexterityCorrectRate_byMagic:   input["overwriteDexterityCorrectRate_byMagic"],
          overwriteMagicCorrectRate_byMagic:       input["overwriteMagicCorrectRate_byMagic"],
          overwriteFaithCorrectRate_byMagic:       input["overwriteFaithCorrectRate_byMagic"],
          overwriteLuckCorrectRate_byMagic:        input["overwriteLuckCorrectRate_byMagic"],
          overwriteStrengthCorrectRate_byFire:     input["overwriteStrengthCorrectRate_byFire"],
          overwriteDexterityCorrectRate_byFire:    input["overwriteDexterityCorrectRate_byFire"],
          overwriteMagicCorrectRate_byFire:        input["overwriteMagicCorrectRate_byFire"],
          overwriteFaithCorrectRate_byFire:        input["overwriteFaithCorrectRate_byFire"],
          overwriteLuckCorrectRate_byFire:         input["overwriteLuckCorrectRate_byFire"],
          overwriteStrengthCorrectRate_byThunder:  input["overwriteStrengthCorrectRate_byThunder"],
          overwriteDexterityCorrectRate_byThunder: input["overwriteDexterityCorrectRate_byThunder"],
          overwriteMagicCorrectRate_byThunder:     input["overwriteMagicCorrectRate_byThunder"],
          overwriteFaithCorrectRate_byThunder:     input["overwriteFaithCorrectRate_byThunder"],
          overwriteLuckCorrectRate_byThunder:      input["overwriteLuckCorrectRate_byThunder"],
          overwriteStrengthCorrectRate_byDark:     input["overwriteStrengthCorrectRate_byDark"],
          overwriteDexterityCorrectRate_byDark:    input["overwriteDexterityCorrectRate_byDark"],
          overwriteMagicCorrectRate_byDark:        input["overwriteMagicCorrectRate_byDark"],
          overwriteFaithCorrectRate_byDark:        input["overwriteFaithCorrectRate_byDark"],
          overwriteLuckCorrectRate_byDark:         input["overwriteLuckCorrectRate_byDark"],

          InfluenceStrengthCorrectRate_byPhysics:  input["InfluenceStrengthCorrectRate_byPhysics"],
          InfluenceDexterityCorrectRate_byPhysics: input["InfluenceDexterityCorrectRate_byPhysics"],
          InfluenceMagicCorrectRate_byPhysics:     input["InfluenceMagicCorrectRate_byPhysics"],
          InfluenceFaithCorrectRate_byPhysics:     input["InfluenceFaithCorrectRate_byPhysics"],
          InfluenceLuckCorrectRate_byPhysics:      input["InfluenceLuckCorrectRate_byPhysics"],
          InfluenceStrengthCorrectRate_byMagic:    input["InfluenceStrengthCorrectRate_byMagic"],
          InfluenceDexterityCorrectRate_byMagic:   input["InfluenceDexterityCorrectRate_byMagic"],
          InfluenceMagicCorrectRate_byMagic:       input["InfluenceMagicCorrectRate_byMagic"],
          InfluenceFaithCorrectRate_byMagic:       input["InfluenceFaithCorrectRate_byMagic"],
          InfluenceLuckCorrectRate_byMagic:        input["InfluenceLuckCorrectRate_byMagic"],
          InfluenceStrengthCorrectRate_byFire:     input["InfluenceStrengthCorrectRate_byFire"],
          InfluenceDexterityCorrectRate_byFire:    input["InfluenceDexterityCorrectRate_byFire"],
          InfluenceMagicCorrectRate_byFire:        input["InfluenceMagicCorrectRate_byFire"],
          InfluenceFaithCorrectRate_byFire:        input["InfluenceFaithCorrectRate_byFire"],
          InfluenceLuckCorrectRate_byFire:         input["InfluenceLuckCorrectRate_byFire"],
          InfluenceStrengthCorrectRate_byThunder:  input["InfluenceStrengthCorrectRate_byThunder"],
          InfluenceDexterityCorrectRate_byThunder: input["InfluenceDexterityCorrectRate_byThunder"],
          InfluenceMagicCorrectRate_byThunder:     input["InfluenceMagicCorrectRate_byThunder"],
          InfluenceFaithCorrectRate_byThunder:     input["InfluenceFaithCorrectRate_byThunder"],
          InfluenceLuckCorrectRate_byThunder:      input["InfluenceLuckCorrectRate_byThunder"],
          InfluenceStrengthCorrectRate_byDark:     input["InfluenceStrengthCorrectRate_byDark"],
          InfluenceDexterityCorrectRate_byDark:    input["InfluenceDexterityCorrectRate_byDark"],
          InfluenceMagicCorrectRate_byDark:        input["InfluenceMagicCorrectRate_byDark"],
          InfluenceFaithCorrectRate_byDark:        input["InfluenceFaithCorrectRate_byDark"],
          InfluenceLuckCorrectRate_byDark:         input["InfluenceLuckCorrectRate_byDark"],
        }
        return output
      end

    end
  end
end
