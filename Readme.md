# react-native-progress-bar

## Usage
```
yarn add react-native-progress-bar
```
or 
```
npm install react-native-progress-bar
```

### import 

```
import {
  StepProgressBar
} from 'react-native-step-progress-bar';
```


## Examples

![react-native-progress-bar pokemon example](doc/pokemon.png?raw=true "Alt Horizondal Example1")

```
<StepProgressBar
    orientation={'horizondal'}
    stepColor="lightgreen"
    activeStep={1}
    completedBarColor={'#a11'}
    stepWidth={50}
    stepHeight={50}
    showLabel={true}
    barLength={30}
    barThickeness={2}
    data={[
        {label: 'Charmander'},
        {label: 'Charmeleon'},
        {label: 'Charizard'},
    ]}
    barColor={'lightgrey'}
    labelTextStyle={{fontFamily: 'roboto', color: '#a11'}}
    renderStep={({index}) => {
        if (index === 0) {
        return (
            <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'orange',
            }}>
            <Image
                style={{width: '100%', height: '100%'}}
                source={{
                uri:
                    'https://img.rankedboost.com/wp-content/plugins/ice/riot/poksimages/pokemons/004.png',
                }}
            />
            </View>
        );
        } else if (index === 1) {
        return (
            <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'orange',
            }}>
            <Image
                style={{width: '100%', height: '100%'}}
                source={{
                uri:
                    'https://img.rankedboost.com/wp-content/plugins/ice/riot/poksimages/pokemons/005.png',
                }}
            />
            </View>
        );
        } else if (index === 2) {
        return (
            <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'lightgrey',
            }}>
            <Image
                style={{width: '100%', height: '100%'}}
                source={{
                uri:
                    'https://img.rankedboost.com/wp-content/plugins/ice/riot/poksimages/pokemons/006.png',
                }}
            />
            </View>
        );
        }
    }}
/>

```

![react-native-progress-bar cart example](doc/cart.png?raw=true "Alt Horizondal Example2")

```
<StepProgressBar
    orientation={'horizondal'}
    barThickeness={2}
    labelContainerStyle={{marginBottom: 10}}
    labelTextColor="#26a541"
    stepColor="#26a541"
    barHeight={5}
    stepWidth={20}
    stepHeight={20}
    showLabel={true}
    barLength={40}
    data={[
        {label: 'Ordered'},
        {label: 'Packed'},
        {label: 'Shipped'},
        {label: 'Delivered'},
    ]}
    barColor={'#26a541'}
    labelTextStyle={{
        fontFamily: 'roboto',
        color: 'green',
    }}
/>
```

![react-native-progress-bar Vertical example1](doc/cart-vertical.png?raw=true "Alt Vertical Example1")

```
<StepProgressBar
    orientation={'vertical'}
    labelTextColor="#26a541"
    stepColor="#26a541"
    barThickeness={2}
    labelContainerStyle={{marginBottom: 10}}
    stepWidth={20}
    stepHeight={20}
    barLength={60}
    showLabel={true}
    data={[
        {label: 'Ordered'},
        {label: 'Packed'},
        {label: 'Shipped'},
        {label: 'Delivered'},
    ]}
    barColor={'#3498ff'}
    labelTextStyle={{
        fontFamily: 'roboto',
        color: '#a11',
        paddingLeft: 10,
    }}
    renderStep={({index}) => {
        return (
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            width: 20,
            height: 20,
            borderRadius: 10,
            borderColor: '#3498ff',
            borderWidth: 1,
            }}>
            <Text style={{textAlign: 'center'}}>{index}</Text>
        </View>
        );
    }}
/>
```
