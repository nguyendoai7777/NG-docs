export class ComponentStoreExtend extends ComponentStore<SampleState> {
  updateAs<C = void, ValueType = C, ReturnType = C extends void ? void : Subscription>(updateTo: keyof SampleState, updateValue: ValueType extends void ? ValueType : ValueType extends infer R ? R : never): ReturnType {
    return this.updater<C>((state, inferValue) => ({
      ...state,
      [updateTo]: inferValue
    }))(updateValue as C) as ReturnType;
  }
}
