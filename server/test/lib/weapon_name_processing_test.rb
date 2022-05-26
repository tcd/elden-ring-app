require "test_helper"

module Test
  module Lib
    class WeaponNameProcessingTest < ActiveSupport::TestCase

      setup do
        @module = ::Lib::WeaponNameProcessing
      end

      test_cases = json_file_fixture("weapon-names-with-affinities.json", symbolize: true)

      test_cases.each do |c|
        input              = c[:input]
        want_weapon_name   = c.dig(:output, :weapon_name)
        want_affinity_name = c.dig(:output, :affinity_name)
        define_method("test_process_name__#{input}") do
          have_weapon_name, have_affinity_name = @module.process_name(input)
          assert_equal(want_weapon_name,   have_weapon_name)
          assert_equal(want_affinity_name, have_affinity_name)
        end
      end

    end
  end
end
