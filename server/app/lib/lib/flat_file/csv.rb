module Lib
  module FlatFile
    module Csv

      # Read a CSV file and return its contents as an array of hashes.
      #
      # @param filepath [String] Path to the CSV file.
      #
      # @return [Array<Hash>]
      def self.from_file(filepath)
        rows = []
        begin
          STANDARD_CSV.foreach(filepath, headers: true) do |row|
            rows.append(row)
          end
          return rows
        rescue StandardError => e
          Rails.logger.error({
            message: "Error reading CSV file",
            filepath: filepath,
            error: e,
          })
          return rows
        end
      end

      # Read a CSV stream and return its contents as an array of hashes.
      #
      # @param data [String, IO] Stream of CSV data.
      #
      # @return [Array<Hash>]
      def self.from_stream(data)
        rows = []
        begin
          STANDARD_CSV.new(data, headers: true).each do |row|
            rows.append(row)
          end
          return rows
        rescue StandardError => e
          Rails.logger.error({
            message: "Error reading CSV data",
            error: e,
          })
          return rows
        end
      end

    end
  end
end
