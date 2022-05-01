module Lib
  module FlatFile
    module Json

      # Return a hash parsed from a given JSON file.
      #
      # @param file [String]
      #
      # @return [ActiveSupport::HashWithIndifferentAccess]
      def self.from_file(file)
        data = STANDARD_JSON.parse(File.read(file))
        if data.is_a?(Array)
          return data.map(&:with_indifferent_access)
        end
        return data&.with_indifferent_access || data
      end

    end
  end
end
