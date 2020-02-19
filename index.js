exports.date = function(d, l) {
  d = typeof d !== "undefined" ? d : new Date()
  l = typeof l !== "undefined" ? l : "tr"

  let diffDays = Math.ceil(Math.abs(new Date() - new Date(d)) / (1000 * 60 * 60 * 24)) - 1
  
  if (typeof window !== "undefined" && typeof window.Intl.RelativeTimeFormat !== "undefined"){
    const rtf1 = new Intl.RelativeTimeFormat(l, {numeric: "auto" })

    if(diffDays >= 0 && diffDays <7) {
      return rtf1.format((diffDays * -1), "day")
    }
    else if(diffDays >= 7 && diffDays <28) {
      return rtf1.format(Math.floor(diffDays/7)  * -1, "week")
    }
    else if(diffDays >= 28 && diffDays <360) {
      return rtf1.format((Math.floor(diffDays/30) * -1), "month")
    }
    else if(diffDays >= 330) {
      return rtf1.format((Math.floor(diffDays/365) * -1), "year")
    }
  }
  else {
    return d
  }
}
