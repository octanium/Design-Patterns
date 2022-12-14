const items = ['xy', true, "hi", 99]

function Iterator(items)
{
  this.items = items
  this.index = 0
}

Iterator.prototype = {
  hasNext: function()
  {
    return this.index < this.items.length
  },
  next: function()
  {
    return this.items[this.index++]
  }
}

const iter = new Iterator(items)

console.log(iter.hasNext())

while(iter.hasNext())
  console.log(iter.next())

console.log(iter.hasNext())