//create your first generic in typescript

function fill<iDontKnow>(array: any[], value: iDontKnow): iDontKnow[] {
  return array.map(() => value)
}

const result = fill([1, 2, 3], "a")
result.map(x => x.toUpperCase())
// result.map( x => x/2 )

const values = fill(["a", "b", "c"], 4)
// values.map(x => x.toUpperCase())
values.map(x => x / 2)
values.map(x => x.toExponential)

