def obtained_assets(folder_name)
  assets_folder_path = "/mnt/c/Users/ClayDunston/source/repos/personal/elden-ring-assets/assets/raw"
  assets_path = File.join(assets_folder_path, folder_name)
  return Dir.children(assets_path).map { |x| x.gsub(".png", "").strip }
end

def check_assets(model_class, folder_name, reverse: false)
  record_names = model_class.all.order(:name).pluck(:name).map { |x| x.strip }
  asset_file_names = obtained_assets(folder_name)
  results = []
  if (reverse)
    asset_file_names.each do |asset_file_name|
      next if Lib::Constants::CutContent::ARMOR.include?(asset_file_name)
      unless record_names.include?(asset_file_name)
        results << asset_file_name
      end
    end
  else
    record_names.each do |record_name|
      next if Lib::Constants::CutContent::ARMOR.include?(record_name)
      unless asset_file_names.include?(record_name)
        results << record_name
      end
    end
  end
  return results
end

def spells(reverse: false)
  record_names = Spell.all.order(:name).pluck(:name).map { |x| x.strip }
  incantations = obtained_assets("Spells/Incantations")
  sorceries = obtained_assets("Spells/Sorceries")
  asset_file_names = [
    *incantations,
    *sorceries,
  ]
  results = []
  if (reverse)
    asset_file_names.each do |asset_file_name|
      next if Lib::Constants::CutContent::ARMOR.include?(asset_file_name)
      unless record_names.include?(asset_file_name)
        results << asset_file_name
      end
    end
  else
    record_names.each do |record_name|
      next if Lib::Constants::CutContent::ARMOR.include?(record_name)
      unless asset_file_names.include?(record_name)
        results << record_name
      end
    end
  end
  return results
end

namespace(:misc) do
  namespace(:check_assets) do
    task(weapons: [:environment]) do
      results = check_assets(Weapon, "Weapons")
      Lib::Util.save_to_file(results, "missing-weapon-assets.json", add_timestamp: true)
    end
    task(armor: [:environment]) do
      results = check_assets(Armor, "Armor", reverse: true)
      Lib::Util.save_to_file(results, "missing-armor-assets.json", add_timestamp: true)
    end
    task(talismans: [:environment]) do
      results = check_assets(Talisman, "Talismans")
      Lib::Util.save_to_file(results, "missing-talismans-assets.json", add_timestamp: true)
    end
    task(spells: [:environment]) do
      results = spells()
      Lib::Util.save_to_file(results, "missing-spells-assets.json", add_timestamp: true)
    end
    task(all: [:environment]) do
      results = {
        armor: check_assets(Armor, "Armor"),
        weapons: check_assets(Weapon, "Weapons"),
        spells: spells(),
        talismans: check_assets(Talisman, "Talismans"),
      }
      output = Lib::Util.save_to_file(results, "unknown-assets.json", add_timestamp: true)
      puts("file written: #{output}")
    end
  end
end
