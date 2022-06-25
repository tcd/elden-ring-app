module Serializers
  module SerializerHelpers

    IS_POSITIVE = ->(field_name, weapon_stat, _options) { weapon_stat[field_name]&.positive?() }

    def self.included(base)
      base.extend(ClassMethods)
    end

    module ClassMethods
      # @param attribute_name [Symbol]
      # @return [void]
      def float_field(attribute_name)
        field(attribute_name) { |x| x[attribute_name]&.to_f || 0.0 }
      end

      # @param attribute_name [Symbol]
      # @return [void]
      def nullable_float_field(attribute_name)
        field(attribute_name, if: IS_POSITIVE) { |x| x[attribute_name].to_f }
      end

      # @param attribute_name [Symbol]
      # @return [void]
      def nullable_field(attribute_name)
        field(attribute_name, if: IS_POSITIVE)
      end
    end

  end
end
