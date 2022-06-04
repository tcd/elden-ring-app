module Serializers
  class WeaponStatSerializer < BaseSerializer

    # @param attribute_name [Symbol]
    # @return [void]
    def self.float_field(attribute_name)
      field(attribute_name) { |x| x[attribute_name]to_f }
    end

    fields(
      :name,
      :weapon_id,
      :weapon_affinity_id,
      :attack_element_correct_param_id,
    )

    float_field(:attack_physical__0)
    float_field(:attack_physical__1)
    float_field(:attack_physical__2)
    float_field(:attack_physical__3)
    float_field(:attack_physical__4)
    float_field(:attack_physical__5)
    float_field(:attack_physical__6)
    float_field(:attack_physical__7)
    float_field(:attack_physical__8)
    float_field(:attack_physical__9)
    float_field(:attack_physical__10)
    float_field(:attack_physical__11)
    float_field(:attack_physical__12)
    float_field(:attack_physical__13)
    float_field(:attack_physical__14)
    float_field(:attack_physical__15)
    float_field(:attack_physical__16)
    float_field(:attack_physical__17)
    float_field(:attack_physical__18)
    float_field(:attack_physical__19)
    float_field(:attack_physical__20)
    float_field(:attack_physical__21)
    float_field(:attack_physical__22)
    float_field(:attack_physical__23)
    float_field(:attack_physical__24)
    float_field(:attack_physical__25)
    float_field(:attack_magic__0)
    float_field(:attack_magic__1)
    float_field(:attack_magic__2)
    float_field(:attack_magic__3)
    float_field(:attack_magic__4)
    float_field(:attack_magic__5)
    float_field(:attack_magic__6)
    float_field(:attack_magic__7)
    float_field(:attack_magic__8)
    float_field(:attack_magic__9)
    float_field(:attack_magic__10)
    float_field(:attack_magic__11)
    float_field(:attack_magic__12)
    float_field(:attack_magic__13)
    float_field(:attack_magic__14)
    float_field(:attack_magic__15)
    float_field(:attack_magic__16)
    float_field(:attack_magic__17)
    float_field(:attack_magic__18)
    float_field(:attack_magic__19)
    float_field(:attack_magic__20)
    float_field(:attack_magic__21)
    float_field(:attack_magic__22)
    float_field(:attack_magic__23)
    float_field(:attack_magic__24)
    float_field(:attack_magic__25)
    float_field(:attack_fire__0)
    float_field(:attack_fire__1)
    float_field(:attack_fire__2)
    float_field(:attack_fire__3)
    float_field(:attack_fire__4)
    float_field(:attack_fire__5)
    float_field(:attack_fire__6)
    float_field(:attack_fire__7)
    float_field(:attack_fire__8)
    float_field(:attack_fire__9)
    float_field(:attack_fire__10)
    float_field(:attack_fire__11)
    float_field(:attack_fire__12)
    float_field(:attack_fire__13)
    float_field(:attack_fire__14)
    float_field(:attack_fire__15)
    float_field(:attack_fire__16)
    float_field(:attack_fire__17)
    float_field(:attack_fire__18)
    float_field(:attack_fire__19)
    float_field(:attack_fire__20)
    float_field(:attack_fire__21)
    float_field(:attack_fire__22)
    float_field(:attack_fire__23)
    float_field(:attack_fire__24)
    float_field(:attack_fire__25)
    float_field(:attack_lightning__0)
    float_field(:attack_lightning__1)
    float_field(:attack_lightning__2)
    float_field(:attack_lightning__3)
    float_field(:attack_lightning__4)
    float_field(:attack_lightning__5)
    float_field(:attack_lightning__6)
    float_field(:attack_lightning__7)
    float_field(:attack_lightning__8)
    float_field(:attack_lightning__9)
    float_field(:attack_lightning__10)
    float_field(:attack_lightning__11)
    float_field(:attack_lightning__12)
    float_field(:attack_lightning__13)
    float_field(:attack_lightning__14)
    float_field(:attack_lightning__15)
    float_field(:attack_lightning__16)
    float_field(:attack_lightning__17)
    float_field(:attack_lightning__18)
    float_field(:attack_lightning__19)
    float_field(:attack_lightning__20)
    float_field(:attack_lightning__21)
    float_field(:attack_lightning__22)
    float_field(:attack_lightning__23)
    float_field(:attack_lightning__24)
    float_field(:attack_lightning__25)
    float_field(:attack_holy__0)
    float_field(:attack_holy__1)
    float_field(:attack_holy__2)
    float_field(:attack_holy__3)
    float_field(:attack_holy__4)
    float_field(:attack_holy__5)
    float_field(:attack_holy__6)
    float_field(:attack_holy__7)
    float_field(:attack_holy__8)
    float_field(:attack_holy__9)
    float_field(:attack_holy__10)
    float_field(:attack_holy__11)
    float_field(:attack_holy__12)
    float_field(:attack_holy__13)
    float_field(:attack_holy__14)
    float_field(:attack_holy__15)
    float_field(:attack_holy__16)
    float_field(:attack_holy__17)
    float_field(:attack_holy__18)
    float_field(:attack_holy__19)
    float_field(:attack_holy__20)
    float_field(:attack_holy__21)
    float_field(:attack_holy__22)
    float_field(:attack_holy__23)
    float_field(:attack_holy__24)
    float_field(:attack_holy__25)
    float_field(:attack_stamina__0)
    float_field(:attack_stamina__1)
    float_field(:attack_stamina__2)
    float_field(:attack_stamina__3)
    float_field(:attack_stamina__4)
    float_field(:attack_stamina__5)
    float_field(:attack_stamina__6)
    float_field(:attack_stamina__7)
    float_field(:attack_stamina__8)
    float_field(:attack_stamina__9)
    float_field(:attack_stamina__10)
    float_field(:attack_stamina__11)
    float_field(:attack_stamina__12)
    float_field(:attack_stamina__13)
    float_field(:attack_stamina__14)
    float_field(:attack_stamina__15)
    float_field(:attack_stamina__16)
    float_field(:attack_stamina__17)
    float_field(:attack_stamina__18)
    float_field(:attack_stamina__19)
    float_field(:attack_stamina__20)
    float_field(:attack_stamina__21)
    float_field(:attack_stamina__22)
    float_field(:attack_stamina__23)
    float_field(:attack_stamina__24)
    float_field(:attack_stamina__25)
    float_field(:scaling_strength__0)
    float_field(:scaling_strength__1)
    float_field(:scaling_strength__2)
    float_field(:scaling_strength__3)
    float_field(:scaling_strength__4)
    float_field(:scaling_strength__5)
    float_field(:scaling_strength__6)
    float_field(:scaling_strength__7)
    float_field(:scaling_strength__8)
    float_field(:scaling_strength__9)
    float_field(:scaling_strength__10)
    float_field(:scaling_strength__11)
    float_field(:scaling_strength__12)
    float_field(:scaling_strength__13)
    float_field(:scaling_strength__14)
    float_field(:scaling_strength__15)
    float_field(:scaling_strength__16)
    float_field(:scaling_strength__17)
    float_field(:scaling_strength__18)
    float_field(:scaling_strength__19)
    float_field(:scaling_strength__20)
    float_field(:scaling_strength__21)
    float_field(:scaling_strength__22)
    float_field(:scaling_strength__23)
    float_field(:scaling_strength__24)
    float_field(:scaling_strength__25)
    float_field(:scaling_dexterity__0)
    float_field(:scaling_dexterity__1)
    float_field(:scaling_dexterity__2)
    float_field(:scaling_dexterity__3)
    float_field(:scaling_dexterity__4)
    float_field(:scaling_dexterity__5)
    float_field(:scaling_dexterity__6)
    float_field(:scaling_dexterity__7)
    float_field(:scaling_dexterity__8)
    float_field(:scaling_dexterity__9)
    float_field(:scaling_dexterity__10)
    float_field(:scaling_dexterity__11)
    float_field(:scaling_dexterity__12)
    float_field(:scaling_dexterity__13)
    float_field(:scaling_dexterity__14)
    float_field(:scaling_dexterity__15)
    float_field(:scaling_dexterity__16)
    float_field(:scaling_dexterity__17)
    float_field(:scaling_dexterity__18)
    float_field(:scaling_dexterity__19)
    float_field(:scaling_dexterity__20)
    float_field(:scaling_dexterity__21)
    float_field(:scaling_dexterity__22)
    float_field(:scaling_dexterity__23)
    float_field(:scaling_dexterity__24)
    float_field(:scaling_dexterity__25)
    float_field(:scaling_intelligence__0)
    float_field(:scaling_intelligence__1)
    float_field(:scaling_intelligence__2)
    float_field(:scaling_intelligence__3)
    float_field(:scaling_intelligence__4)
    float_field(:scaling_intelligence__5)
    float_field(:scaling_intelligence__6)
    float_field(:scaling_intelligence__7)
    float_field(:scaling_intelligence__8)
    float_field(:scaling_intelligence__9)
    float_field(:scaling_intelligence__10)
    float_field(:scaling_intelligence__11)
    float_field(:scaling_intelligence__12)
    float_field(:scaling_intelligence__13)
    float_field(:scaling_intelligence__14)
    float_field(:scaling_intelligence__15)
    float_field(:scaling_intelligence__16)
    float_field(:scaling_intelligence__17)
    float_field(:scaling_intelligence__18)
    float_field(:scaling_intelligence__19)
    float_field(:scaling_intelligence__20)
    float_field(:scaling_intelligence__21)
    float_field(:scaling_intelligence__22)
    float_field(:scaling_intelligence__23)
    float_field(:scaling_intelligence__24)
    float_field(:scaling_intelligence__25)
    float_field(:scaling_faith__0)
    float_field(:scaling_faith__1)
    float_field(:scaling_faith__2)
    float_field(:scaling_faith__3)
    float_field(:scaling_faith__4)
    float_field(:scaling_faith__5)
    float_field(:scaling_faith__6)
    float_field(:scaling_faith__7)
    float_field(:scaling_faith__8)
    float_field(:scaling_faith__9)
    float_field(:scaling_faith__10)
    float_field(:scaling_faith__11)
    float_field(:scaling_faith__12)
    float_field(:scaling_faith__13)
    float_field(:scaling_faith__14)
    float_field(:scaling_faith__15)
    float_field(:scaling_faith__16)
    float_field(:scaling_faith__17)
    float_field(:scaling_faith__18)
    float_field(:scaling_faith__19)
    float_field(:scaling_faith__20)
    float_field(:scaling_faith__21)
    float_field(:scaling_faith__22)
    float_field(:scaling_faith__23)
    float_field(:scaling_faith__24)
    float_field(:scaling_faith__25)
    float_field(:scaling_arcane__0)
    float_field(:scaling_arcane__1)
    float_field(:scaling_arcane__2)
    float_field(:scaling_arcane__3)
    float_field(:scaling_arcane__4)
    float_field(:scaling_arcane__5)
    float_field(:scaling_arcane__6)
    float_field(:scaling_arcane__7)
    float_field(:scaling_arcane__8)
    float_field(:scaling_arcane__9)
    float_field(:scaling_arcane__10)
    float_field(:scaling_arcane__11)
    float_field(:scaling_arcane__12)
    float_field(:scaling_arcane__13)
    float_field(:scaling_arcane__14)
    float_field(:scaling_arcane__15)
    float_field(:scaling_arcane__16)
    float_field(:scaling_arcane__17)
    float_field(:scaling_arcane__18)
    float_field(:scaling_arcane__19)
    float_field(:scaling_arcane__20)
    float_field(:scaling_arcane__21)
    float_field(:scaling_arcane__22)
    float_field(:scaling_arcane__23)
    float_field(:scaling_arcane__24)
    float_field(:scaling_arcane__25)

    # field(:attack_physical__0)       { |x| x.attack_physical__0.to_f }
    # field(:attack_physical__1)       { |x| x.attack_physical__1.to_f }
    # field(:attack_physical__2)       { |x| x.attack_physical__2.to_f }
    # field(:attack_physical__3)       { |x| x.attack_physical__3.to_f }
    # field(:attack_physical__4)       { |x| x.attack_physical__4.to_f }
    # field(:attack_physical__5)       { |x| x.attack_physical__5.to_f }
    # field(:attack_physical__6)       { |x| x.attack_physical__6.to_f }
    # field(:attack_physical__7)       { |x| x.attack_physical__7.to_f }
    # field(:attack_physical__8)       { |x| x.attack_physical__8.to_f }
    # field(:attack_physical__9)       { |x| x.attack_physical__9.to_f }
    # field(:attack_physical__10)      { |x| x.attack_physical__10.to_f }
    # field(:attack_physical__11)      { |x| x.attack_physical__11.to_f }
    # field(:attack_physical__12)      { |x| x.attack_physical__12.to_f }
    # field(:attack_physical__13)      { |x| x.attack_physical__13.to_f }
    # field(:attack_physical__14)      { |x| x.attack_physical__14.to_f }
    # field(:attack_physical__15)      { |x| x.attack_physical__15.to_f }
    # field(:attack_physical__16)      { |x| x.attack_physical__16.to_f }
    # field(:attack_physical__17)      { |x| x.attack_physical__17.to_f }
    # field(:attack_physical__18)      { |x| x.attack_physical__18.to_f }
    # field(:attack_physical__19)      { |x| x.attack_physical__19.to_f }
    # field(:attack_physical__20)      { |x| x.attack_physical__20.to_f }
    # field(:attack_physical__21)      { |x| x.attack_physical__21.to_f }
    # field(:attack_physical__22)      { |x| x.attack_physical__22.to_f }
    # field(:attack_physical__23)      { |x| x.attack_physical__23.to_f }
    # field(:attack_physical__24)      { |x| x.attack_physical__24.to_f }
    # field(:attack_physical__25)      { |x| x.attack_physical__25.to_f }
    # field(:attack_magic__0)          { |x| x.attack_magic__0.to_f }
    # field(:attack_magic__1)          { |x| x.attack_magic__1.to_f }
    # field(:attack_magic__2)          { |x| x.attack_magic__2.to_f }
    # field(:attack_magic__3)          { |x| x.attack_magic__3.to_f }
    # field(:attack_magic__4)          { |x| x.attack_magic__4.to_f }
    # field(:attack_magic__5)          { |x| x.attack_magic__5.to_f }
    # field(:attack_magic__6)          { |x| x.attack_magic__6.to_f }
    # field(:attack_magic__7)          { |x| x.attack_magic__7.to_f }
    # field(:attack_magic__8)          { |x| x.attack_magic__8.to_f }
    # field(:attack_magic__9)          { |x| x.attack_magic__9.to_f }
    # field(:attack_magic__10)         { |x| x.attack_magic__10.to_f }
    # field(:attack_magic__11)         { |x| x.attack_magic__11.to_f }
    # field(:attack_magic__12)         { |x| x.attack_magic__12.to_f }
    # field(:attack_magic__13)         { |x| x.attack_magic__13.to_f }
    # field(:attack_magic__14)         { |x| x.attack_magic__14.to_f }
    # field(:attack_magic__15)         { |x| x.attack_magic__15.to_f }
    # field(:attack_magic__16)         { |x| x.attack_magic__16.to_f }
    # field(:attack_magic__17)         { |x| x.attack_magic__17.to_f }
    # field(:attack_magic__18)         { |x| x.attack_magic__18.to_f }
    # field(:attack_magic__19)         { |x| x.attack_magic__19.to_f }
    # field(:attack_magic__20)         { |x| x.attack_magic__20.to_f }
    # field(:attack_magic__21)         { |x| x.attack_magic__21.to_f }
    # field(:attack_magic__22)         { |x| x.attack_magic__22.to_f }
    # field(:attack_magic__23)         { |x| x.attack_magic__23.to_f }
    # field(:attack_magic__24)         { |x| x.attack_magic__24.to_f }
    # field(:attack_magic__25)         { |x| x.attack_magic__25.to_f }
    # field(:attack_fire__0)           { |x| x.attack_fire__0.to_f }
    # field(:attack_fire__1)           { |x| x.attack_fire__1.to_f }
    # field(:attack_fire__2)           { |x| x.attack_fire__2.to_f }
    # field(:attack_fire__3)           { |x| x.attack_fire__3.to_f }
    # field(:attack_fire__4)           { |x| x.attack_fire__4.to_f }
    # field(:attack_fire__5)           { |x| x.attack_fire__5.to_f }
    # field(:attack_fire__6)           { |x| x.attack_fire__6.to_f }
    # field(:attack_fire__7)           { |x| x.attack_fire__7.to_f }
    # field(:attack_fire__8)           { |x| x.attack_fire__8.to_f }
    # field(:attack_fire__9)           { |x| x.attack_fire__9.to_f }
    # field(:attack_fire__10)          { |x| x.attack_fire__10.to_f }
    # field(:attack_fire__11)          { |x| x.attack_fire__11.to_f }
    # field(:attack_fire__12)          { |x| x.attack_fire__12.to_f }
    # field(:attack_fire__13)          { |x| x.attack_fire__13.to_f }
    # field(:attack_fire__14)          { |x| x.attack_fire__14.to_f }
    # field(:attack_fire__15)          { |x| x.attack_fire__15.to_f }
    # field(:attack_fire__16)          { |x| x.attack_fire__16.to_f }
    # field(:attack_fire__17)          { |x| x.attack_fire__17.to_f }
    # field(:attack_fire__18)          { |x| x.attack_fire__18.to_f }
    # field(:attack_fire__19)          { |x| x.attack_fire__19.to_f }
    # field(:attack_fire__20)          { |x| x.attack_fire__20.to_f }
    # field(:attack_fire__21)          { |x| x.attack_fire__21.to_f }
    # field(:attack_fire__22)          { |x| x.attack_fire__22.to_f }
    # field(:attack_fire__23)          { |x| x.attack_fire__23.to_f }
    # field(:attack_fire__24)          { |x| x.attack_fire__24.to_f }
    # field(:attack_fire__25)          { |x| x.attack_fire__25.to_f }
    # field(:attack_lightning__0)      { |x| x.attack_lightning__0.to_f }
    # field(:attack_lightning__1)      { |x| x.attack_lightning__1.to_f }
    # field(:attack_lightning__2)      { |x| x.attack_lightning__2.to_f }
    # field(:attack_lightning__3)      { |x| x.attack_lightning__3.to_f }
    # field(:attack_lightning__4)      { |x| x.attack_lightning__4.to_f }
    # field(:attack_lightning__5)      { |x| x.attack_lightning__5.to_f }
    # field(:attack_lightning__6)      { |x| x.attack_lightning__6.to_f }
    # field(:attack_lightning__7)      { |x| x.attack_lightning__7.to_f }
    # field(:attack_lightning__8)      { |x| x.attack_lightning__8.to_f }
    # field(:attack_lightning__9)      { |x| x.attack_lightning__9.to_f }
    # field(:attack_lightning__10)     { |x| x.attack_lightning__10.to_f }
    # field(:attack_lightning__11)     { |x| x.attack_lightning__11.to_f }
    # field(:attack_lightning__12)     { |x| x.attack_lightning__12.to_f }
    # field(:attack_lightning__13)     { |x| x.attack_lightning__13.to_f }
    # field(:attack_lightning__14)     { |x| x.attack_lightning__14.to_f }
    # field(:attack_lightning__15)     { |x| x.attack_lightning__15.to_f }
    # field(:attack_lightning__16)     { |x| x.attack_lightning__16.to_f }
    # field(:attack_lightning__17)     { |x| x.attack_lightning__17.to_f }
    # field(:attack_lightning__18)     { |x| x.attack_lightning__18.to_f }
    # field(:attack_lightning__19)     { |x| x.attack_lightning__19.to_f }
    # field(:attack_lightning__20)     { |x| x.attack_lightning__20.to_f }
    # field(:attack_lightning__21)     { |x| x.attack_lightning__21.to_f }
    # field(:attack_lightning__22)     { |x| x.attack_lightning__22.to_f }
    # field(:attack_lightning__23)     { |x| x.attack_lightning__23.to_f }
    # field(:attack_lightning__24)     { |x| x.attack_lightning__24.to_f }
    # field(:attack_lightning__25)     { |x| x.attack_lightning__25.to_f }
    # field(:attack_holy__0)           { |x| x.attack_holy__0.to_f }
    # field(:attack_holy__1)           { |x| x.attack_holy__1.to_f }
    # field(:attack_holy__2)           { |x| x.attack_holy__2.to_f }
    # field(:attack_holy__3)           { |x| x.attack_holy__3.to_f }
    # field(:attack_holy__4)           { |x| x.attack_holy__4.to_f }
    # field(:attack_holy__5)           { |x| x.attack_holy__5.to_f }
    # field(:attack_holy__6)           { |x| x.attack_holy__6.to_f }
    # field(:attack_holy__7)           { |x| x.attack_holy__7.to_f }
    # field(:attack_holy__8)           { |x| x.attack_holy__8.to_f }
    # field(:attack_holy__9)           { |x| x.attack_holy__9.to_f }
    # field(:attack_holy__10)          { |x| x.attack_holy__10.to_f }
    # field(:attack_holy__11)          { |x| x.attack_holy__11.to_f }
    # field(:attack_holy__12)          { |x| x.attack_holy__12.to_f }
    # field(:attack_holy__13)          { |x| x.attack_holy__13.to_f }
    # field(:attack_holy__14)          { |x| x.attack_holy__14.to_f }
    # field(:attack_holy__15)          { |x| x.attack_holy__15.to_f }
    # field(:attack_holy__16)          { |x| x.attack_holy__16.to_f }
    # field(:attack_holy__17)          { |x| x.attack_holy__17.to_f }
    # field(:attack_holy__18)          { |x| x.attack_holy__18.to_f }
    # field(:attack_holy__19)          { |x| x.attack_holy__19.to_f }
    # field(:attack_holy__20)          { |x| x.attack_holy__20.to_f }
    # field(:attack_holy__21)          { |x| x.attack_holy__21.to_f }
    # field(:attack_holy__22)          { |x| x.attack_holy__22.to_f }
    # field(:attack_holy__23)          { |x| x.attack_holy__23.to_f }
    # field(:attack_holy__24)          { |x| x.attack_holy__24.to_f }
    # field(:attack_holy__25)          { |x| x.attack_holy__25.to_f }
    # field(:attack_stamina__0)        { |x| x.attack_stamina__0.to_f }
    # field(:attack_stamina__1)        { |x| x.attack_stamina__1.to_f }
    # field(:attack_stamina__2)        { |x| x.attack_stamina__2.to_f }
    # field(:attack_stamina__3)        { |x| x.attack_stamina__3.to_f }
    # field(:attack_stamina__4)        { |x| x.attack_stamina__4.to_f }
    # field(:attack_stamina__5)        { |x| x.attack_stamina__5.to_f }
    # field(:attack_stamina__6)        { |x| x.attack_stamina__6.to_f }
    # field(:attack_stamina__7)        { |x| x.attack_stamina__7.to_f }
    # field(:attack_stamina__8)        { |x| x.attack_stamina__8.to_f }
    # field(:attack_stamina__9)        { |x| x.attack_stamina__9.to_f }
    # field(:attack_stamina__10)       { |x| x.attack_stamina__10.to_f }
    # field(:attack_stamina__11)       { |x| x.attack_stamina__11.to_f }
    # field(:attack_stamina__12)       { |x| x.attack_stamina__12.to_f }
    # field(:attack_stamina__13)       { |x| x.attack_stamina__13.to_f }
    # field(:attack_stamina__14)       { |x| x.attack_stamina__14.to_f }
    # field(:attack_stamina__15)       { |x| x.attack_stamina__15.to_f }
    # field(:attack_stamina__16)       { |x| x.attack_stamina__16.to_f }
    # field(:attack_stamina__17)       { |x| x.attack_stamina__17.to_f }
    # field(:attack_stamina__18)       { |x| x.attack_stamina__18.to_f }
    # field(:attack_stamina__19)       { |x| x.attack_stamina__19.to_f }
    # field(:attack_stamina__20)       { |x| x.attack_stamina__20.to_f }
    # field(:attack_stamina__21)       { |x| x.attack_stamina__21.to_f }
    # field(:attack_stamina__22)       { |x| x.attack_stamina__22.to_f }
    # field(:attack_stamina__23)       { |x| x.attack_stamina__23.to_f }
    # field(:attack_stamina__24)       { |x| x.attack_stamina__24.to_f }
    # field(:attack_stamina__25)       { |x| x.attack_stamina__25.to_f }
    # field(:scaling_strength__0)      { |x| x.scaling_strength__0.to_f }
    # field(:scaling_strength__1)      { |x| x.scaling_strength__1.to_f }
    # field(:scaling_strength__2)      { |x| x.scaling_strength__2.to_f }
    # field(:scaling_strength__3)      { |x| x.scaling_strength__3.to_f }
    # field(:scaling_strength__4)      { |x| x.scaling_strength__4.to_f }
    # field(:scaling_strength__5)      { |x| x.scaling_strength__5.to_f }
    # field(:scaling_strength__6)      { |x| x.scaling_strength__6.to_f }
    # field(:scaling_strength__7)      { |x| x.scaling_strength__7.to_f }
    # field(:scaling_strength__8)      { |x| x.scaling_strength__8.to_f }
    # field(:scaling_strength__9)      { |x| x.scaling_strength__9.to_f }
    # field(:scaling_strength__10)     { |x| x.scaling_strength__10.to_f }
    # field(:scaling_strength__11)     { |x| x.scaling_strength__11.to_f }
    # field(:scaling_strength__12)     { |x| x.scaling_strength__12.to_f }
    # field(:scaling_strength__13)     { |x| x.scaling_strength__13.to_f }
    # field(:scaling_strength__14)     { |x| x.scaling_strength__14.to_f }
    # field(:scaling_strength__15)     { |x| x.scaling_strength__15.to_f }
    # field(:scaling_strength__16)     { |x| x.scaling_strength__16.to_f }
    # field(:scaling_strength__17)     { |x| x.scaling_strength__17.to_f }
    # field(:scaling_strength__18)     { |x| x.scaling_strength__18.to_f }
    # field(:scaling_strength__19)     { |x| x.scaling_strength__19.to_f }
    # field(:scaling_strength__20)     { |x| x.scaling_strength__20.to_f }
    # field(:scaling_strength__21)     { |x| x.scaling_strength__21.to_f }
    # field(:scaling_strength__22)     { |x| x.scaling_strength__22.to_f }
    # field(:scaling_strength__23)     { |x| x.scaling_strength__23.to_f }
    # field(:scaling_strength__24)     { |x| x.scaling_strength__24.to_f }
    # field(:scaling_strength__25)     { |x| x.scaling_strength__25.to_f }
    # field(:scaling_dexterity__0)     { |x| x.scaling_dexterity__0.to_f }
    # field(:scaling_dexterity__1)     { |x| x.scaling_dexterity__1.to_f }
    # field(:scaling_dexterity__2)     { |x| x.scaling_dexterity__2.to_f }
    # field(:scaling_dexterity__3)     { |x| x.scaling_dexterity__3.to_f }
    # field(:scaling_dexterity__4)     { |x| x.scaling_dexterity__4.to_f }
    # field(:scaling_dexterity__5)     { |x| x.scaling_dexterity__5.to_f }
    # field(:scaling_dexterity__6)     { |x| x.scaling_dexterity__6.to_f }
    # field(:scaling_dexterity__7)     { |x| x.scaling_dexterity__7.to_f }
    # field(:scaling_dexterity__8)     { |x| x.scaling_dexterity__8.to_f }
    # field(:scaling_dexterity__9)     { |x| x.scaling_dexterity__9.to_f }
    # field(:scaling_dexterity__10)    { |x| x.scaling_dexterity__10.to_f }
    # field(:scaling_dexterity__11)    { |x| x.scaling_dexterity__11.to_f }
    # field(:scaling_dexterity__12)    { |x| x.scaling_dexterity__12.to_f }
    # field(:scaling_dexterity__13)    { |x| x.scaling_dexterity__13.to_f }
    # field(:scaling_dexterity__14)    { |x| x.scaling_dexterity__14.to_f }
    # field(:scaling_dexterity__15)    { |x| x.scaling_dexterity__15.to_f }
    # field(:scaling_dexterity__16)    { |x| x.scaling_dexterity__16.to_f }
    # field(:scaling_dexterity__17)    { |x| x.scaling_dexterity__17.to_f }
    # field(:scaling_dexterity__18)    { |x| x.scaling_dexterity__18.to_f }
    # field(:scaling_dexterity__19)    { |x| x.scaling_dexterity__19.to_f }
    # field(:scaling_dexterity__20)    { |x| x.scaling_dexterity__20.to_f }
    # field(:scaling_dexterity__21)    { |x| x.scaling_dexterity__21.to_f }
    # field(:scaling_dexterity__22)    { |x| x.scaling_dexterity__22.to_f }
    # field(:scaling_dexterity__23)    { |x| x.scaling_dexterity__23.to_f }
    # field(:scaling_dexterity__24)    { |x| x.scaling_dexterity__24.to_f }
    # field(:scaling_dexterity__25)    { |x| x.scaling_dexterity__25.to_f }
    # field(:scaling_intelligence__0)  { |x| x.scaling_intelligence__0.to_f }
    # field(:scaling_intelligence__1)  { |x| x.scaling_intelligence__1.to_f }
    # field(:scaling_intelligence__2)  { |x| x.scaling_intelligence__2.to_f }
    # field(:scaling_intelligence__3)  { |x| x.scaling_intelligence__3.to_f }
    # field(:scaling_intelligence__4)  { |x| x.scaling_intelligence__4.to_f }
    # field(:scaling_intelligence__5)  { |x| x.scaling_intelligence__5.to_f }
    # field(:scaling_intelligence__6)  { |x| x.scaling_intelligence__6.to_f }
    # field(:scaling_intelligence__7)  { |x| x.scaling_intelligence__7.to_f }
    # field(:scaling_intelligence__8)  { |x| x.scaling_intelligence__8.to_f }
    # field(:scaling_intelligence__9)  { |x| x.scaling_intelligence__9.to_f }
    # field(:scaling_intelligence__10) { |x| x.scaling_intelligence__10.to_f }
    # field(:scaling_intelligence__11) { |x| x.scaling_intelligence__11.to_f }
    # field(:scaling_intelligence__12) { |x| x.scaling_intelligence__12.to_f }
    # field(:scaling_intelligence__13) { |x| x.scaling_intelligence__13.to_f }
    # field(:scaling_intelligence__14) { |x| x.scaling_intelligence__14.to_f }
    # field(:scaling_intelligence__15) { |x| x.scaling_intelligence__15.to_f }
    # field(:scaling_intelligence__16) { |x| x.scaling_intelligence__16.to_f }
    # field(:scaling_intelligence__17) { |x| x.scaling_intelligence__17.to_f }
    # field(:scaling_intelligence__18) { |x| x.scaling_intelligence__18.to_f }
    # field(:scaling_intelligence__19) { |x| x.scaling_intelligence__19.to_f }
    # field(:scaling_intelligence__20) { |x| x.scaling_intelligence__20.to_f }
    # field(:scaling_intelligence__21) { |x| x.scaling_intelligence__21.to_f }
    # field(:scaling_intelligence__22) { |x| x.scaling_intelligence__22.to_f }
    # field(:scaling_intelligence__23) { |x| x.scaling_intelligence__23.to_f }
    # field(:scaling_intelligence__24) { |x| x.scaling_intelligence__24.to_f }
    # field(:scaling_intelligence__25) { |x| x.scaling_intelligence__25.to_f }
    # field(:scaling_faith__0)         { |x| x.scaling_faith__0.to_f }
    # field(:scaling_faith__1)         { |x| x.scaling_faith__1.to_f }
    # field(:scaling_faith__2)         { |x| x.scaling_faith__2.to_f }
    # field(:scaling_faith__3)         { |x| x.scaling_faith__3.to_f }
    # field(:scaling_faith__4)         { |x| x.scaling_faith__4.to_f }
    # field(:scaling_faith__5)         { |x| x.scaling_faith__5.to_f }
    # field(:scaling_faith__6)         { |x| x.scaling_faith__6.to_f }
    # field(:scaling_faith__7)         { |x| x.scaling_faith__7.to_f }
    # field(:scaling_faith__8)         { |x| x.scaling_faith__8.to_f }
    # field(:scaling_faith__9)         { |x| x.scaling_faith__9.to_f }
    # field(:scaling_faith__10)        { |x| x.scaling_faith__10.to_f }
    # field(:scaling_faith__11)        { |x| x.scaling_faith__11.to_f }
    # field(:scaling_faith__12)        { |x| x.scaling_faith__12.to_f }
    # field(:scaling_faith__13)        { |x| x.scaling_faith__13.to_f }
    # field(:scaling_faith__14)        { |x| x.scaling_faith__14.to_f }
    # field(:scaling_faith__15)        { |x| x.scaling_faith__15.to_f }
    # field(:scaling_faith__16)        { |x| x.scaling_faith__16.to_f }
    # field(:scaling_faith__17)        { |x| x.scaling_faith__17.to_f }
    # field(:scaling_faith__18)        { |x| x.scaling_faith__18.to_f }
    # field(:scaling_faith__19)        { |x| x.scaling_faith__19.to_f }
    # field(:scaling_faith__20)        { |x| x.scaling_faith__20.to_f }
    # field(:scaling_faith__21)        { |x| x.scaling_faith__21.to_f }
    # field(:scaling_faith__22)        { |x| x.scaling_faith__22.to_f }
    # field(:scaling_faith__23)        { |x| x.scaling_faith__23.to_f }
    # field(:scaling_faith__24)        { |x| x.scaling_faith__24.to_f }
    # field(:scaling_faith__25)        { |x| x.scaling_faith__25.to_f }
    # field(:scaling_arcane__0)        { |x| x.scaling_arcane__0.to_f }
    # field(:scaling_arcane__1)        { |x| x.scaling_arcane__1.to_f }
    # field(:scaling_arcane__2)        { |x| x.scaling_arcane__2.to_f }
    # field(:scaling_arcane__3)        { |x| x.scaling_arcane__3.to_f }
    # field(:scaling_arcane__4)        { |x| x.scaling_arcane__4.to_f }
    # field(:scaling_arcane__5)        { |x| x.scaling_arcane__5.to_f }
    # field(:scaling_arcane__6)        { |x| x.scaling_arcane__6.to_f }
    # field(:scaling_arcane__7)        { |x| x.scaling_arcane__7.to_f }
    # field(:scaling_arcane__8)        { |x| x.scaling_arcane__8.to_f }
    # field(:scaling_arcane__9)        { |x| x.scaling_arcane__9.to_f }
    # field(:scaling_arcane__10)       { |x| x.scaling_arcane__10.to_f }
    # field(:scaling_arcane__11)       { |x| x.scaling_arcane__11.to_f }
    # field(:scaling_arcane__12)       { |x| x.scaling_arcane__12.to_f }
    # field(:scaling_arcane__13)       { |x| x.scaling_arcane__13.to_f }
    # field(:scaling_arcane__14)       { |x| x.scaling_arcane__14.to_f }
    # field(:scaling_arcane__15)       { |x| x.scaling_arcane__15.to_f }
    # field(:scaling_arcane__16)       { |x| x.scaling_arcane__16.to_f }
    # field(:scaling_arcane__17)       { |x| x.scaling_arcane__17.to_f }
    # field(:scaling_arcane__18)       { |x| x.scaling_arcane__18.to_f }
    # field(:scaling_arcane__19)       { |x| x.scaling_arcane__19.to_f }
    # field(:scaling_arcane__20)       { |x| x.scaling_arcane__20.to_f }
    # field(:scaling_arcane__21)       { |x| x.scaling_arcane__21.to_f }
    # field(:scaling_arcane__22)       { |x| x.scaling_arcane__22.to_f }
    # field(:scaling_arcane__23)       { |x| x.scaling_arcane__23.to_f }
    # field(:scaling_arcane__24)       { |x| x.scaling_arcane__24.to_f }
    # field(:scaling_arcane__25)       { |x| x.scaling_arcane__25.to_f }

  end
end
