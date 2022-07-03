module Lib
  module FlatFile
    module Tsv

      CUSTOM_BOOL_CONVERTER = ->(string) do
        return true  if string&.downcase == "true"
        return false if string&.downcase == "false"
        return string
      rescue
        return string
      end

      # Read a TSV file and return its contents as an array of hashes.
      #
      # @param filepath [String] Path to the TSV file
      # @param delimiter [String]
      # @param quote_char [String]
      #
      # @return [Array<Hash{String => String}>]
      def self.from_file(filepath, delimiter: "\t", quote_char: "\x00")
        content = File.read(filepath.to_s)
        return STANDARD_CSV.parse(
          content,
          col_sep: delimiter,
          headers: true,
          quote_char: quote_char,
          converters: [
            :all,
            CUSTOM_BOOL_CONVERTER,
          ],
        ).map(&:to_hash)
      end

      # Read a TSV stream and return its contents as an array of hashes.
      #
      # @param data [String, IO] Stream of TSV data.
      # @return [Array<Hash>]
      def self.from_stream(data)
        begin
          result = STANDARD_CSV.new(data, headers: true, col_sep: "\t", quote_char: "\x00").map(&:to_hash)
          return result
        rescue StandardError => e
          Rails.logger.error({
            message: "Error reading TSV data",
            error: e,
          })
          return []
        end
      end

    end
  end
end
