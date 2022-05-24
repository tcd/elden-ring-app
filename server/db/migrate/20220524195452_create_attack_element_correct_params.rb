class CreateAttackElementCorrectParams < ActiveRecord::Migration[7.0]
  def change
    create_table(:attack_element_correct_params, id: false) do |t|

      t.integer(:id, primary_key: true, null: false, index: { unique: true })

      t.boolean(:isStrengthCorrect_byPhysics,  null: false) # default: false
      t.boolean(:isDexterityCorrect_byPhysics, null: false) # default: false
      t.boolean(:isMagicCorrect_byPhysics,     null: false) # default: false
      t.boolean(:isFaithCorrect_byPhysics,     null: false) # default: false
      t.boolean(:isLuckCorrect_byPhysics,      null: false) # default: false
      t.boolean(:isStrengthCorrect_byMagic,    null: false) # default: false
      t.boolean(:isDexterityCorrect_byMagic,   null: false) # default: false
      t.boolean(:isMagicCorrect_byMagic,       null: false) # default: false
      t.boolean(:isFaithCorrect_byMagic,       null: false) # default: false
      t.boolean(:isLuckCorrect_byMagic,        null: false) # default: false
      t.boolean(:isStrengthCorrect_byFire,     null: false) # default: false
      t.boolean(:isDexterityCorrect_byFire,    null: false) # default: false
      t.boolean(:isMagicCorrect_byFire,        null: false) # default: false
      t.boolean(:isFaithCorrect_byFire,        null: false) # default: false
      t.boolean(:isLuckCorrect_byFire,         null: false) # default: false
      t.boolean(:isStrengthCorrect_byThunder,  null: false) # default: false
      t.boolean(:isDexterityCorrect_byThunder, null: false) # default: false
      t.boolean(:isMagicCorrect_byThunder,     null: false) # default: false
      t.boolean(:isFaithCorrect_byThunder,     null: false) # default: false
      t.boolean(:isLuckCorrect_byThunder,      null: false) # default: false
      t.boolean(:isStrengthCorrect_byDark,     null: false) # default: false
      t.boolean(:isDexterityCorrect_byDark,    null: false) # default: false
      t.boolean(:isMagicCorrect_byDark,        null: false) # default: false
      t.boolean(:isFaithCorrect_byDark,        null: false) # default: false
      t.boolean(:isLuckCorrect_byDark,         null: false) # default: false

      t.integer(:overwriteStrengthCorrectRate_byPhysics,  null: false) # default: -1
      t.integer(:overwriteDexterityCorrectRate_byPhysics, null: false) # default: -1
      t.integer(:overwriteMagicCorrectRate_byPhysics,     null: false) # default: -1
      t.integer(:overwriteFaithCorrectRate_byPhysics,     null: false) # default: -1
      t.integer(:overwriteLuckCorrectRate_byPhysics,      null: false) # default: -1
      t.integer(:overwriteStrengthCorrectRate_byMagic,    null: false) # default: -1
      t.integer(:overwriteDexterityCorrectRate_byMagic,   null: false) # default: -1
      t.integer(:overwriteMagicCorrectRate_byMagic,       null: false) # default: -1
      t.integer(:overwriteFaithCorrectRate_byMagic,       null: false) # default: -1
      t.integer(:overwriteLuckCorrectRate_byMagic,        null: false) # default: -1
      t.integer(:overwriteStrengthCorrectRate_byFire,     null: false) # default: -1
      t.integer(:overwriteDexterityCorrectRate_byFire,    null: false) # default: -1
      t.integer(:overwriteMagicCorrectRate_byFire,        null: false) # default: -1
      t.integer(:overwriteFaithCorrectRate_byFire,        null: false) # default: -1
      t.integer(:overwriteLuckCorrectRate_byFire,         null: false) # default: -1
      t.integer(:overwriteStrengthCorrectRate_byThunder,  null: false) # default: -1
      t.integer(:overwriteDexterityCorrectRate_byThunder, null: false) # default: -1
      t.integer(:overwriteMagicCorrectRate_byThunder,     null: false) # default: -1
      t.integer(:overwriteFaithCorrectRate_byThunder,     null: false) # default: -1
      t.integer(:overwriteLuckCorrectRate_byThunder,      null: false) # default: -1
      t.integer(:overwriteStrengthCorrectRate_byDark,     null: false) # default: -1
      t.integer(:overwriteDexterityCorrectRate_byDark,    null: false) # default: -1
      t.integer(:overwriteMagicCorrectRate_byDark,        null: false) # default: -1
      t.integer(:overwriteFaithCorrectRate_byDark,        null: false) # default: -1
      t.integer(:overwriteLuckCorrectRate_byDark,         null: false) # default: -1

      t.integer(:InfluenceStrengthCorrectRate_byPhysics,  null: false) # default: 100
      t.integer(:InfluenceDexterityCorrectRate_byPhysics, null: false) # default: 100
      t.integer(:InfluenceMagicCorrectRate_byPhysics,     null: false) # default: 100
      t.integer(:InfluenceFaithCorrectRate_byPhysics,     null: false) # default: 100
      t.integer(:InfluenceLuckCorrectRate_byPhysics,      null: false) # default: 100
      t.integer(:InfluenceStrengthCorrectRate_byMagic,    null: false) # default: 100
      t.integer(:InfluenceDexterityCorrectRate_byMagic,   null: false) # default: 100
      t.integer(:InfluenceMagicCorrectRate_byMagic,       null: false) # default: 100
      t.integer(:InfluenceFaithCorrectRate_byMagic,       null: false) # default: 100
      t.integer(:InfluenceLuckCorrectRate_byMagic,        null: false) # default: 100
      t.integer(:InfluenceStrengthCorrectRate_byFire,     null: false) # default: 100
      t.integer(:InfluenceDexterityCorrectRate_byFire,    null: false) # default: 100
      t.integer(:InfluenceMagicCorrectRate_byFire,        null: false) # default: 100
      t.integer(:InfluenceFaithCorrectRate_byFire,        null: false) # default: 100
      t.integer(:InfluenceLuckCorrectRate_byFire,         null: false) # default: 100
      t.integer(:InfluenceStrengthCorrectRate_byThunder,  null: false) # default: 100
      t.integer(:InfluenceDexterityCorrectRate_byThunder, null: false) # default: 100
      t.integer(:InfluenceMagicCorrectRate_byThunder,     null: false) # default: 100
      t.integer(:InfluenceFaithCorrectRate_byThunder,     null: false) # default: 100
      t.integer(:InfluenceLuckCorrectRate_byThunder,      null: false) # default: 100
      t.integer(:InfluenceStrengthCorrectRate_byDark,     null: false) # default: 100
      t.integer(:InfluenceDexterityCorrectRate_byDark,    null: false) # default: 100
      t.integer(:InfluenceMagicCorrectRate_byDark,        null: false) # default: 100
      t.integer(:InfluenceFaithCorrectRate_byDark,        null: false) # default: 100
      t.integer(:InfluenceLuckCorrectRate_byDark,         null: false) # default: 100

      t.timestamps()
    end
  end
end
