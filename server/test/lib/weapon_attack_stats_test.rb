require "test_helper"

module Test
  module Lib
    class WeaponAttackStatsTest < ActiveSupport::TestCase

      setup do
        @class = ::Lib::Tasks::Seed::WeaponAttackStats
      end

      test_cases = json_file_fixture("weapon-names-with-affinities.json", symbolize: true)

      test_cases.each do |c|
        input         = c[:input]
        weapon_name   = c.dig(:output, :weapon_name)
        affinity_name = c.dig(:output, :affinity_name)
        define_method("test_process_name__#{input}") do
          have = @class.process_name(input)
          assert_equal(weapon_name,   have[:weapon_name])
          assert_equal(affinity_name, have[:affinity_name])
        end
      end

    end
  end
end
