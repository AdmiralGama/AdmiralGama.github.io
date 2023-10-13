function convert() {
    let raw_table = {"Carbon": 1, "Iron": 1, "Lead": 1, "Nickel": 1, "Phosphorus": 1, "Rhenium": 1, "Sulphur": 1,
                 "Arsenic": 2, "Chromium": 2, "Germanium": 2, "Manganese": 2, "Vanadium": 2, "Zinc": 2, "Zirconium": 2,
                 "Boron": 3, "Cadmium": 3, "Mercury": 3, "Molybdenum": 3, "Niobium": 3, "Tin": 3, "Tungsten": 3,
                 "Antimony": 4, "Polonium": 4, "Ruthenium": 4, "Selenium": 4, "Technetium": 4, "Tellurium": 4, "Yttrium": 4};

    let encoded_table = {"Anomalous Bulk Scan Data": 1, "Atypical Disrupted Wake Echoes": 1, "Distorted Shield Cycle Recordings": 1, "Exceptional Scrambled Emission Data": 1, "Pattern Gamma Obelisk Data": 1, "Specialised Legacy Firmware": 1, "Unusual Encrypted Files": 1,
                 "Anomalous FSD Telemetry": 2, "Inconsistent Shield Soak Analysis": 2, "Irregular Emission Data": 2, "Modified Consumer Firmware": 2, "Pattern Beta Obelisk Data": 2, "Tagged Encryption Codes": 2, "Thargoid Structural Data": 2, "Unidentified Scan Archives": 2,
                 "Classified Scan Databanks": 3, "Cracked Industrial Firmware": 3, "Massive Energy Surge Analytics": 3, "Open Symmetric Keys": 3, "Pattern Alpha Obelisk Data": 3, "Ship Flight Data": 3, "Ship Systems Data": 3, "Strange Wake Solutions": 3, "Thargoid Interdiction Telemetry": 3, "Thargoid Material Composition Data": 3, "Thargoid Ship Signature": 3, "Unexpected Emission Data": 3, "Untypical Shield Scans": 3,
                 "Aberrant Shield Pattern Analysis": 4, "Atypical Encryption Archives": 4, "Decoded Emission Data": 4, "Divergent Scan Data": 4, "Eccentric Hyperspace Trajectories": 4, "Pattern Delta Obelisk Data": 4, "Pattern Epsilon Obelisk Data": 4, "Security Firmware Patch": 4, "Thargoid Residue Data": 4, "Thargoid Wake Data": 4,
                 "Abnormal Compact Emissions Data": 5, "Adaptive Encryptors Capture": 5, "Classified Scan Fragment": 5, "Datamined Wake Exceptions": 5, "Guardian Module Blueprint Fragment": 5, "Guardian Vessel Blueprint Fragment": 5, "Guardian Weapon Blueprint Fragment": 5, "Modified Embedded Firmware": 5, "Peculiar Shield Frequency Data": 5};

    let manufactured_table = {"Basic Conductors": 1, "Chemical Storage Units": 1, "Compact Composites": 1, "Crystal Shards": 1, "Grid Resistors": 1, "Guardian Power Cell": 1, "Guardian Wreckage Components": 1, "Hardened Surface Fragments": 1, "Heat Conduction Wiring": 1, "Mechanical Scrap": 1, "Salvaged Alloys": 1, "Tempered Alloys": 1, "Worn Shield Emitters": 1,
                 "Caustic Shard": 2, "Chemical Processors": 2, "Conductive Components": 2, "Filament Composites": 2, "Flawed Focus Crystals": 2, "Galvanising Alloys": 2, "Guardian Power Conduit": 2, "Heat Dispersion Plate": 2, "Heat Resistant Ceramics": 2, "Hybrid Capacitors": 2, "Mechanical Equipment": 2, "Shield Emitters": 2, "Tactical Core Chip": 2, "Thargoid Carapace": 2,
                 "Bio-Mechanical Conduits": 3, "Chemical Distillery": 3, "Conductive Ceramics": 3, "Corrosive Mechanisms": 3, "Electrochemical Arrays": 3, "Focus Crystals": 3, "Guardian Sentinel Weapon Parts": 3, "Guardian Technology Component": 3, "Heat Exchangers": 3, "High Density Composites": 3, "Mechanical Components": 3, "Phase Alloys": 3, "Phasing Membrane Residue": 3, "Precipitated Alloys": 3, "Shielding Sensors": 3, "Thargoid Energy Cell": 3, "Wreckage Components": 3,
                 "Caustic Crystals": 4, "Chemical Manipulators": 4, "Compound Shielding": 4, "Conductive Polymers": 4, "Configurable Components": 4, "Heat Vanes": 4, "Polymer Capacitors": 4, "Proprietary Composites": 4, "Proto Light Alloys": 4, "Refined Focus Crystals": 4, "Thargoid Technological Components": 4, "Thermic Alloys": 4, "Weapon Parts": 4,
                 "Biotech Conductors": 5, "Core Dynamics Composites": 5, "Exquisite Focus Crystals": 5, "Heat Exposure Specimen": 5, "Imperial Shielding": 5, "Improvised Components": 5, "Military Grade Alloys": 5, "Military SUpercapacitors": 5, "Pharmaceutical Isolators": 5, "Propulsion Elements": 5, "Proto Heat Radiators": 5, "Proto Radiolic Alloys": 5, "Sensor Fragment": 5, "Thargoid Organic Circuitry": 5};

    let raw = {1: 0, 2: 0, 3: 0, 4: 0};
    let encoded = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let manufactured = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

    let input = document.getElementById("input").value;
    let input_lines = input.split('\n');

    for (var i = 0; i < input_lines.length; i++) {
        let material = input_lines[i].split(': ')[0];
        let amount = parseInt(input_lines[i].split(': ')[1]);

        if (Object.keys(raw_table).includes(material)) {
            let grade = raw_table[material];
            raw[grade] = raw[grade] + amount;
        }
        else if (Object.keys(encoded_table).includes(material)) {
            let grade = encoded_table[material];
            encoded[grade] = encoded[grade] + amount;
        }
        else if (Object.keys(manufactured_table).includes(material)) {
            let grade = manufactured_table[material];
            manufactured[grade] = manufactured[grade] + amount;
        }
        else {
            console.log("Error on " + material);
        }
    }

    output = output_format(raw, encoded, manufactured);

    document.getElementById("output").innerHTML = output;
}

function output_format(raw, encoded, manufactured) {
    let output = "Raw:";

    for (let i = 1; i < Object.keys(raw).length + 1; i++) {
        output += "\n" + i + ": " + raw[i];
    }

    output += "\nEncoded:"

    for (let i = 1; i < Object.keys(encoded).length + 1; i++) {
        output += "\n" + i + ": " + encoded[i];
    }

    output += "\nManufactured:"

    for (let i = 1; i < Object.keys(manufactured).length + 1; i++) {
        output += "\n" + i + ": " + manufactured[i];
    }

    return output;
}