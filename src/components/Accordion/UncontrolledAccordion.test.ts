import {ActionType, reducer, StateType} from "./UncontrolledAccordion";


test('reducer test', () => {

    const state: StateType = {
        collapsed: false
    }
    const action: ActionType = {
        type: "TOGGLE-COLLAPSED"
    }
    const result = reducer(state, action)
    expect(result.collapsed).toBe(false)

})