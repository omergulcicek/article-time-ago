# article-time-ago

Belirtilen tarih ile anlık tarih arasındaki süreyi sözel olarak yazar.

Bloglarda ki makalelerin tarihini belirtmek için uygundur.

Örnek çıktılar:

- bugün
- dün
- evvelsi gün
- 3/4/5/6 gün önce
- bu hafta
- 2/3 hafta önce
- bu ay
- geçen ay
- 2/3/4... ay önce
- geçen yıl
- 2/3/4 ... yıl önce

## Kullanımı

`npm i article-time-ago`

```js
import articleTimeAgo from "article-time-ago";

articleTimeAgo.date("2020.02.19")
```

### Dil Değişikliği

Varsayılan olarak Türkçe çıktı verir. Dil değiştirmek için 2. parametre olarak istediğiniz dili yazın.

[HTML Tüm Dil Kodları](https://www.w3schools.com/Tags/ref_language_codes.asp)

Örnek:

```js
articleTimeAgo.date("2020.02.19")
articleTimeAgo.date("2020.02.19", "tr")
// bugün

articleTimeAgo.date("2020.02.19", "en")
// today

articleTimeAgo.date("2020.02.19", "de")
// heute

articleTimeAgo.date("2020.02.19", "fr")
// aujourd’hui

articleTimeAgo.date("2020.02.19", "zh")
// 今天

articleTimeAgo.date("2020.02.19", "ar")
// اليوم
```

### Tarih Formatı

Tarih formatı "yıl ay gün" şekline olmalıdır. Rakamlar arasındaki işaret `.`, `/` yada `-` olabilir.

```
2020.02.19
2020/02/19
2020-02-19
```
