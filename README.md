### LenaProject  Kurulumu
Aşağıdaki adımları takip ederek Story React Native uygulamasının nasıl kurulacağını öğrenebilirsiniz.

<div style="display: flex;">
  <img src="src/assets/screenshots/sc1.png" width="250" height="500" style="margin-right: 10px;">
  <img src="src/assets/screenshots/sc2.png" width="250" height="500" style="margin-right: 10px;">
  <img src="src/assets/screenshots/sc3.png" width="250" height="500">
</div>


### Ön Gereksinimler
- Node.js (sürüm 12 veya üstü)
- Yarn veya npm (sürüm 6 veya üstü)
- Xcode (sadece iOS için)

### Kurulum
1. Bu repository'yi klonlayın:

```
git clone https://github.com/Ozantunaa/lenaProject.git
cd lenaProject
```

2. Gerekli bağımlılıkları yükleyin:
- ```yarn install```veya ```npm install```

3. iOS için, projeyi açın ve Xcode'da derleyin:
```
cd ios
pod install
cd ..
react-native run-ios
```
4. Android için:

```
react-native run-android
```
