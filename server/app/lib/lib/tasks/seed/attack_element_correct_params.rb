module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class AttackElementCorrectParams

        # @return [void]
        def self.seed()
          # AttackElementCorrectParam.destroy_all()
          invalid = Lib::Tasks::Seed.from_tsv("calculation/AttackElementCorrectParam.tsv", AttackElementCorrectParam) do |fx|
            _args = {
              id: fx["ID"],

              isStrengthCorrect_byPhysics:  (fx["isStrengthCorrect_byPhysics"].to_s == "1"),
              isDexterityCorrect_byPhysics: (fx["isDexterityCorrect_byPhysics"].to_s == "1"),
              isMagicCorrect_byPhysics:     (fx["isMagicCorrect_byPhysics"].to_s == "1"),
              isFaithCorrect_byPhysics:     (fx["isFaithCorrect_byPhysics"].to_s == "1"),
              isLuckCorrect_byPhysics:      (fx["isLuckCorrect_byPhysics"].to_s == "1"),
              isStrengthCorrect_byMagic:    (fx["isStrengthCorrect_byMagic"].to_s == "1"),
              isDexterityCorrect_byMagic:   (fx["isDexterityCorrect_byMagic"].to_s == "1"),
              isMagicCorrect_byMagic:       (fx["isMagicCorrect_byMagic"].to_s == "1"),
              isFaithCorrect_byMagic:       (fx["isFaithCorrect_byMagic"].to_s == "1"),
              isLuckCorrect_byMagic:        (fx["isLuckCorrect_byMagic"].to_s == "1"),
              isStrengthCorrect_byFire:     (fx["isStrengthCorrect_byFire"].to_s == "1"),
              isDexterityCorrect_byFire:    (fx["isDexterityCorrect_byFire"].to_s == "1"),
              isMagicCorrect_byFire:        (fx["isMagicCorrect_byFire"].to_s == "1"),
              isFaithCorrect_byFire:        (fx["isFaithCorrect_byFire"].to_s == "1"),
              isLuckCorrect_byFire:         (fx["isLuckCorrect_byFire"].to_s == "1"),
              isStrengthCorrect_byThunder:  (fx["isStrengthCorrect_byThunder"].to_s == "1"),
              isDexterityCorrect_byThunder: (fx["isDexterityCorrect_byThunder"].to_s == "1"),
              isMagicCorrect_byThunder:     (fx["isMagicCorrect_byThunder"].to_s == "1"),
              isFaithCorrect_byThunder:     (fx["isFaithCorrect_byThunder"].to_s == "1"),
              isLuckCorrect_byThunder:      (fx["isLuckCorrect_byThunder"].to_s == "1"),
              isStrengthCorrect_byDark:     (fx["isStrengthCorrect_byDark"].to_s == "1"),
              isDexterityCorrect_byDark:    (fx["isDexterityCorrect_byDark"].to_s == "1"),
              isMagicCorrect_byDark:        (fx["isMagicCorrect_byDark"].to_s == "1"),
              isFaithCorrect_byDark:        (fx["isFaithCorrect_byDark"].to_s == "1"),
              isLuckCorrect_byDark:         (fx["isLuckCorrect_byDark"].to_s == "1"),

              overwriteStrengthCorrectRate_byPhysics:  fx["overwriteStrengthCorrectRate_byPhysics"],
              overwriteDexterityCorrectRate_byPhysics: fx["overwriteDexterityCorrectRate_byPhysics"],
              overwriteMagicCorrectRate_byPhysics:     fx["overwriteMagicCorrectRate_byPhysics"],
              overwriteFaithCorrectRate_byPhysics:     fx["overwriteFaithCorrectRate_byPhysics"],
              overwriteLuckCorrectRate_byPhysics:      fx["overwriteLuckCorrectRate_byPhysics"],
              overwriteStrengthCorrectRate_byMagic:    fx["overwriteStrengthCorrectRate_byMagic"],
              overwriteDexterityCorrectRate_byMagic:   fx["overwriteDexterityCorrectRate_byMagic"],
              overwriteMagicCorrectRate_byMagic:       fx["overwriteMagicCorrectRate_byMagic"],
              overwriteFaithCorrectRate_byMagic:       fx["overwriteFaithCorrectRate_byMagic"],
              overwriteLuckCorrectRate_byMagic:        fx["overwriteLuckCorrectRate_byMagic"],
              overwriteStrengthCorrectRate_byFire:     fx["overwriteStrengthCorrectRate_byFire"],
              overwriteDexterityCorrectRate_byFire:    fx["overwriteDexterityCorrectRate_byFire"],
              overwriteMagicCorrectRate_byFire:        fx["overwriteMagicCorrectRate_byFire"],
              overwriteFaithCorrectRate_byFire:        fx["overwriteFaithCorrectRate_byFire"],
              overwriteLuckCorrectRate_byFire:         fx["overwriteLuckCorrectRate_byFire"],
              overwriteStrengthCorrectRate_byThunder:  fx["overwriteStrengthCorrectRate_byThunder"],
              overwriteDexterityCorrectRate_byThunder: fx["overwriteDexterityCorrectRate_byThunder"],
              overwriteMagicCorrectRate_byThunder:     fx["overwriteMagicCorrectRate_byThunder"],
              overwriteFaithCorrectRate_byThunder:     fx["overwriteFaithCorrectRate_byThunder"],
              overwriteLuckCorrectRate_byThunder:      fx["overwriteLuckCorrectRate_byThunder"],
              overwriteStrengthCorrectRate_byDark:     fx["overwriteStrengthCorrectRate_byDark"],
              overwriteDexterityCorrectRate_byDark:    fx["overwriteDexterityCorrectRate_byDark"],
              overwriteMagicCorrectRate_byDark:        fx["overwriteMagicCorrectRate_byDark"],
              overwriteFaithCorrectRate_byDark:        fx["overwriteFaithCorrectRate_byDark"],
              overwriteLuckCorrectRate_byDark:         fx["overwriteLuckCorrectRate_byDark"],

              InfluenceStrengthCorrectRate_byPhysics:  fx["InfluenceStrengthCorrectRate_byPhysics"],
              InfluenceDexterityCorrectRate_byPhysics: fx["InfluenceDexterityCorrectRate_byPhysics"],
              InfluenceMagicCorrectRate_byPhysics:     fx["InfluenceMagicCorrectRate_byPhysics"],
              InfluenceFaithCorrectRate_byPhysics:     fx["InfluenceFaithCorrectRate_byPhysics"],
              InfluenceLuckCorrectRate_byPhysics:      fx["InfluenceLuckCorrectRate_byPhysics"],
              InfluenceStrengthCorrectRate_byMagic:    fx["InfluenceStrengthCorrectRate_byMagic"],
              InfluenceDexterityCorrectRate_byMagic:   fx["InfluenceDexterityCorrectRate_byMagic"],
              InfluenceMagicCorrectRate_byMagic:       fx["InfluenceMagicCorrectRate_byMagic"],
              InfluenceFaithCorrectRate_byMagic:       fx["InfluenceFaithCorrectRate_byMagic"],
              InfluenceLuckCorrectRate_byMagic:        fx["InfluenceLuckCorrectRate_byMagic"],
              InfluenceStrengthCorrectRate_byFire:     fx["InfluenceStrengthCorrectRate_byFire"],
              InfluenceDexterityCorrectRate_byFire:    fx["InfluenceDexterityCorrectRate_byFire"],
              InfluenceMagicCorrectRate_byFire:        fx["InfluenceMagicCorrectRate_byFire"],
              InfluenceFaithCorrectRate_byFire:        fx["InfluenceFaithCorrectRate_byFire"],
              InfluenceLuckCorrectRate_byFire:         fx["InfluenceLuckCorrectRate_byFire"],
              InfluenceStrengthCorrectRate_byThunder:  fx["InfluenceStrengthCorrectRate_byThunder"],
              InfluenceDexterityCorrectRate_byThunder: fx["InfluenceDexterityCorrectRate_byThunder"],
              InfluenceMagicCorrectRate_byThunder:     fx["InfluenceMagicCorrectRate_byThunder"],
              InfluenceFaithCorrectRate_byThunder:     fx["InfluenceFaithCorrectRate_byThunder"],
              InfluenceLuckCorrectRate_byThunder:      fx["InfluenceLuckCorrectRate_byThunder"],
              InfluenceStrengthCorrectRate_byDark:     fx["InfluenceStrengthCorrectRate_byDark"],
              InfluenceDexterityCorrectRate_byDark:    fx["InfluenceDexterityCorrectRate_byDark"],
              InfluenceMagicCorrectRate_byDark:        fx["InfluenceMagicCorrectRate_byDark"],
              InfluenceFaithCorrectRate_byDark:        fx["InfluenceFaithCorrectRate_byDark"],
              InfluenceLuckCorrectRate_byDark:         fx["InfluenceLuckCorrectRate_byDark"],
            }
          end
          return invalid
        end

      end
    end
  end
end
