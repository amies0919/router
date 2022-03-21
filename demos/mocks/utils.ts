// 理解 handlers callbacks   src/utils/callbacks.ts
export const MockArray = <T>() => {
  let mockarray: T[] = []
  const add = (ele: T) => {
    mockarray.push(ele)
    const consume = () => {
      const i = mockarray.indexOf(ele)
      if (i > -1) mockarray.splice(i, 1)
    }
    return consume
  }
  const reset = () => {
    mockarray = []
  }

  return {
    add,
    reset,
    list: () => mockarray,
  }
}

// 理解 extends shallowRef<T extends object>(value: T): T extends Ref ? T : ShallowRef<T>;
//
interface AA {
  nana: string
  yangyang: string
}
interface Fam extends AA {
  xin: string
  num: number
}

export class Mama implements Fam {
  public nana = 'haha'
  public xin = 'hahahhahahah'
  public yangyang = 'yang'
  public num = 3
}

// 理解 bind

export const applyToPPPPP = (
  fn: (v: string | number) => string,
  mama: Record<string, string | number>
): Record<string, string> => {
  const newFam: Record<string, string> = {}
  for (const key in mama) {
    newFam[key] = fn(mama[key])
  }
  return newFam
}
