module Lib
  module Helpers
    # Removes blank values from array columns.
    module Stripper

      # @return [void]
      def self.included(base)
        base.before_validation(:strip_blanks_from_arrays!)
      end

      # @return [void]
      def strip_blanks_from_arrays!()
        self.attributes.each do |attribute|
          next unless attribute.last.is_a?(Array)
          attribute[1].reject!(&:blank?)&.uniq!()
        end
      end

    end
  end
end
