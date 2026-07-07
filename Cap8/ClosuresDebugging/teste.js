const num1 = 1
function func1(){
    const num2 = 2
    function func2(){
        const num3 = 3
        console.log(num1)
        console.log(num2)
        console.log(num3)
    }
    func2()
}
debugger
func1()