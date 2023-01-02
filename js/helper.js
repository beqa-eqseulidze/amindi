
// PASS Seconds(წამები) NUMBER AS AN ARGUMENT 
// AND RETURNS TWO VALUE HOURS AS A STRING LIKE THIS "05:15" 
//AND ALSO RETURNS AS NUMBER LIKE THIS 515:

export const CgetHour=function(secunds){
    let hour= new Date(secunds*1000).toString().split(' ')[4].split(':').slice(0,2).join(':')
    return {
        asNumber:Number(hour.split(':').join('')),
        asString:hour
    }
    }


// convert seconds since 01-01-1970 T 00:00:00 to date:
export const CgetDate=function(seconds){
    return new Date(seconds*1000).getDate();
}
// convert seconds since 01-01-1970 T 00:00:00 to month:
export const CgetMonth=function(seconds){
    const month = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერუ","დეკემბერი"];
    return month[new Date(seconds*1000).getMonth()];
}
// convert seconds since 01-01-1970 T 00:00:00 to weekday:

export const CgetWeekDay=function(secunds){
    const weekday = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]
    const d = new Date(secunds*1000);
    return weekday[d.getDay()]
}

