namespace(:misc) do
  task(generate_weapon_names: [:environment]) do
    input = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "calculation", "Attack.tsv"))
    results = []
    pb = Lib::ProgressBar.new(input.length, title: "Generating weapon names")
    input.each do |row|
      name_with_affinity = row["Name"]&.strip()
      weapon_name, affinity_name = Lib::WeaponNameProcessing.process_name(name_with_affinity)
      results.push({
        weapon: weapon_name,
        affinity: affinity_name,
        name_with_affinity: name_with_affinity,
      })
      pb.increment()
    end
    Lib::Util.save_to_file(results, "weapon-names.json", add_timestamp: true)
  end
end
