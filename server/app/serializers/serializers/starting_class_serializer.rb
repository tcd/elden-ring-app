module Serializers
  class StartingClassSerializer < BaseSerializer

    identifier(:id)

    fields(
      :name,
      :description,
      # :sort_order,
      :level,
      :vigor,
      :mind,
      :endurance,
      :strength,
      :dexterity,
      :intelligence,
      :faith,
      :arcane,
      :total_levels,
    )

    field(:R1, unless: ->(_, record, _) { record.r1.blank? }) { |x| x.r1&.name }
    field(:R2, unless: ->(_, record, _) { record.r2.blank? }) { |x| x.r2&.name }
    field(:L1, unless: ->(_, record, _) { record.l1.blank? }) { |x| x.l1&.name }
    field(:L2, unless: ->(_, record, _) { record.l2.blank? }) { |x| x.l2&.name }

    field(:Head,  unless: ->(_, record, _) { record.head.blank?  }) { |x| x.head&.name  }
    field(:Chest, unless: ->(_, record, _) { record.chest.blank? }) { |x| x.chest&.name }
    field(:Arms,  unless: ->(_, record, _) { record.arms.blank?  }) { |x| x.arms&.name  }
    field(:Legs,  unless: ->(_, record, _) { record.legs.blank?  }) { |x| x.legs&.name  }

    field(:Spell1, unless: ->(_, record, _) { record.spell_1.blank? }) { |x| x.spell_1&.name }
    field(:Spell2, unless: ->(_, record, _) { record.spell_2.blank? }) { |x| x.spell_2&.name }

  end
end
