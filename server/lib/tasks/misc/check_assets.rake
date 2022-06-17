# Returns a list of the asset files we have
# @param folder_name [String]
def _obtained_assets(folder_name)
  assets_folder_path = "/mnt/c/Users/ClayDunston/source/repos/personal/elden-ring-assets/assets/raw"
  assets_path = File.join(assets_folder_path, folder_name)
  return Dir.children(assets_path).map { |x| x.gsub(".png", "").strip }
end

# @param asset_names [Array<String>]
# @param record_names [Array<String>]
# @param reverse [Boolean]
def _compare_assets(asset_names, record_names, reverse: false)
  results = []
  if (reverse)
    asset_names.each do |asset_name|
      next if Lib::Constants::CutContent::ARMOR.include?(asset_name)
      unless record_names.include?(asset_name)
        results << asset_name
      end
    end
  else
    record_names.each do |record_name|
      next if Lib::Constants::CutContent::ARMOR.include?(record_name)
      unless asset_names.include?(record_name)
        results << record_name
      end
    end
  end
  return results
end

def check_assets(model_class, folder_name, reverse: false)
  record_names = model_class.all.order(:name).pluck(:name).map { |x| x.strip }
  asset_names  = _obtained_assets(folder_name)
  return _compare_assets(asset_names, record_names, reverse: reverse)
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
      results = check_assets(Spell, "Spells")
      Lib::Util.save_to_file(results, "missing-spells-assets.json", add_timestamp: true)
    end

    task(weapon_skills: [:environment]) do
      record_names = WeaponSkill.ashes_of_war.order(:name).pluck(:name).map { |x| x.strip }
      asset_names  = _obtained_assets("Ashes of War")
      results = _compare_assets(asset_names, record_names, reverse: false)
      Lib::Util.save_to_file(results, "missing-weapon-skills.json", add_timestamp: true)
    end

    task(all: [:environment]) do
      results = {
        armor: check_assets(Armor, "Armor"),
        weapons: check_assets(Weapon, "Weapons"),
        spells: check_assets(Spell, "Spells"),
        talismans: check_assets(Talisman, "Talismans"),
      }
      output = Lib::Util.save_to_file(results, "missing-assets.json", add_timestamp: true)
      puts("file written: #{output}")
    end

  end
end
