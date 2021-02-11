
var _timestamp
const timezones = ["BRT", "US24", "US12", "EU"]
const zones = {
    "BRT": function(){
        let _date
        let _month = _timestamp.getMonth()+1
        _month = _month.toString()
        _month = _month.length < 2 ? "0"+_month : _month
        let _day = _timestamp.getDate().toString()
        _day = _day.length < 2 ? "0"+_day : _day
        let _hr =  _timestamp.getHours().toString()
        _hr = _hr.length < 2 ? "0"+_hr : _hr
        let _min = _timestamp.getMinutes().toString()
        _min = _min.length < 2 ? "0"+_min : _min
        _date = _day +"/"+ _month +"/"+ _timestamp.getFullYear() +" às "+ _hr +":"+ _min;
        
        return _date.toString()
    },
    "US24": function(){
        let _date
        let _month = _timestamp.getMonth()+1
        _month = _month.toString()
        _month = _month.length < 2 ? "0"+_month : _month
        let _day = _timestamp.getDate().toString()
        _day = _day.length < 2 ? "0"+_day : _day
        let _hr =  _timestamp.getHours().toString()
        _hr = _hr.length < 2 ? "0"+_hr : _hr
        let _min = _timestamp.getMinutes().toString()
        _min = _min.length < 2 ? "0"+_min : _min
        _date = _month +"-"+ _day +"-"+ _timestamp.getFullYear() +" at "+ _hr +":"+ _min;
        
        return _date.toString()
    },
    "US12": function(){
        let _date
        let _month = _timestamp.getMonth()+1
        _month = _month.toString()
        _month = _month.length < 2 ? "0"+_month : _month
        let _day = _timestamp.getDate().toString()
        _day = _day.length < 2 ? "0"+_day : _day
        let _hr =  _timestamp.getHours().toString()
        _hr = _hr.length < 2 ? "0"+_hr : _hr
        let ampm = _hr < 12 ? "am" : "pm"
        _hr = _hr % 12
        _hr = _hr ? _hr : 12
        let _min = _timestamp.getMinutes().toString()
        _min = _min.length < 2 ? "0"+_min : _min
        _date = _month +"-"+ _day +"-"+ _timestamp.getFullYear() +" at "+ _hr +":"+ _min + " " + ampm;
        
        return _date.toString()
    },
    "EU": function(){
        let _date
        let _month = _timestamp.getMonth()+1
        _month = _month.toString()
        _month = _month.length < 2 ? "0"+_month : _month
        let _day = _timestamp.getDate().toString()
        _day = _day.length < 2 ? "0"+_day : _day
        let _hr =  _timestamp.getHours().toString()
        _hr = _hr.length < 2 ? "0"+_hr : _hr
        let _min = _timestamp.getMinutes().toString()
        _min = _min.length < 2 ? "0"+_min : _min
        _date = _day +"-"+ _month +"-"+ _timestamp.getFullYear() +" "+ _hr +":"+ _min;
        
        return _date.toString()
    },
}

function isInTimezone(_tz, _timezones) {
    return _timezones.indexOf(_tz) > -1;
}

module.exports = {
    syncFormat(timestamp, tz){
        _timestamp = new Date(timestamp);
        
        if (isInTimezone(tz, timezones)){
            return zones[tz]();          
        }
        return false
    },

    async asyncFormat(timestamp, tz){
        _timestamp = new Date(timestamp);
        
        if (isInTimezone(tz, timezones)){
            return zones[tz]();          
        }
        return false
    }
}
