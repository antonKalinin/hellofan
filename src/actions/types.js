/* @flow */

// TODO: Finish it
type MatchType = Object;
type BroadcastType = Object;

export type ActionType =
    // ui
    { type: 'MINIMIZE_HEADER' }
  | { type: 'MAXIMIZE_HEADER' }
  | { type: 'CHANGE_TAB', activeTabIndex: number }

    // user
  | { type: 'SET_LOCATION', location: Object }

    // match
  | { type: 'RECEIVE_MATCH', match: MatchType }
  | { type: 'RECEIVE_MATCH_LIST', list: Array<MatchType> }

    // broadcast
  | { type: 'RECEIVE_BROADCAST', match: BroadcastType }
  | { type: 'RECEIVE_BROADCAST_LIST', list: Array<BroadcastType> };

export type DispatchType = (
    action: ActionType | ThunkActionType | PromiseActionType | Array<ActionType>
) => any;
export type GetStateType = () => Object;
export type ThunkActionType = (dispatch: DispatchType, getState: GetStateType) => any;
export type PromiseActionType = Promise<ActionType>;

export type UiStateType = {
    isMobile: boolean,
    isHeaderMinimized: boolean,
    activeTabIndex: number,
};

export type UserStateType = {
    location: ?{
        city: string,
        country: string,
        position: [number, number]
    }
};

export type MatchStateType = {
    match: MatchType,
    list: Array<MatchType>
};

export type BroadcastStateType = {
    broadcast: BroadcastType,
    list: Array<BroadcastType>
};

export type StateType = {
    ui: UiStateType,
    user: UserStateType,
    match: MatchStateType,
    broadcast: BroadcastStateType,
};
