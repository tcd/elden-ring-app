module Lib
  module Validators
    class PhysicalDamageTypeValidator < ActiveModel::Validator

      # @param record [Weapon]
      # @return [void]
      def validate(record)
        if record.physical_damage_types.blank?()
          record.errors.add(:physical_damage_types, "can not be blank")
          return nil
        end
        record.physical_damage_types.each do |dt|
          unless Lib::Constants::DamageTypes::Physical::ALL.include?(dt)
            record.errors.add(:physical_damage_types, "'#{dt}' is not a valid physical_damage_type")
          end
        end
        return nil
      end

    end
  end
end
