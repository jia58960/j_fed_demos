class PraiseButton{
  constructor(num, $element){
    this.num = num || 0
    this.$element = $element || null
  }
  handleClick() {

  }
}

class Thumb extends PraiseButton{
  constructor(num, max, $element) {
    super(num, $element)
    this.max = max || 10
  }
  handleClick() {
    this.$element.on('click', () => {
      if(this.num < this.max) {
        this.num = window.add(this.num)
        console.log(this.num)
      } else {
        this.num = 0
      }
    })
  }
}

export default Thumb
