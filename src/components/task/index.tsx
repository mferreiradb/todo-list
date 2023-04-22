import { useState } from "react"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { View } from "react-native"
import { styles } from "./styles"


export function Task() {
    const [checked, setChecked] = useState(false)

    return (
    <View style={styles.container}>
        <BouncyCheckbox
            fillColor={checked ? '#5E60CE' : '#4EA8DE'}
            size={25}
            text="Custom Checkbox"
            onPress={() => setChecked(!checked)}
          />
    </View>
    )
}