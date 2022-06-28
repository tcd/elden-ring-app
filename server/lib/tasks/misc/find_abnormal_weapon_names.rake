namespace(:misc) do
  task(find_abnormal_weapon_names: [:environment]) do
    stats = WeaponStat.includes(:weapon, :weapon_affinity).order("weapons.name").all()
    results = []
    pb = Lib::ProgressBar.new(stats.length, title: "Checking names")
    # @param stat [WeaponStat]
    stats.each do |stat|
      if stat.weapon.is_special
        pb.increment()
        next
      end
      if stat.weapon_affinity.name == "Standard"
        pb.increment()
        next
      end
      if stat.weapon_affinity.name == "Blood"
        pb.increment()
        next
      end
      if stat.name != (stat.weapon_affinity.name + " " + stat.weapon.name)
        results << stat.weapon.name
      end
      pb.increment()
    end
    Lib::Util.save_to_file(results.uniq, "abnormal-weapon-names.json", add_timestamp: true, log: true)
  end
end
