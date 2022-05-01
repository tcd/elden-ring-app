class AddMetadataToEquipmentEffects < ActiveRecord::Migration[7.0]
  def change()
    add_column(:equipment_effects, :metadata, :jsonb, default: {})
  end
end
