function calculate(e){
    var result = document.getElementById('result');
    if(e.keyCode == 13){
        var v = document.getElementById('expression').value.trim();

        var ex = new Expression('');
        if(v!=''){
            try{
                ex.Expression(v);
                result.innerHTML = '= ' + ex.Evaluate();
            }
            catch(e){
                result.innerHTML = 'wrong expression!'
            }
        }
    }
    else
        result.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function(){
    var expr = document.getElementById('expression');
    expr.addEventListener('keyup',calculate);
})