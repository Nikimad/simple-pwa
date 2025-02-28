export type ActionPayloadsDraft = { [key: string]: unknown } | void;

export type Action<ActionsPayloads extends ActionPayloadsDraft> = {
  [ActionType in keyof ActionsPayloads]: ActionsPayloads[ActionType] extends void
    ? { type: ActionType }
    : { type: ActionType; payload: ActionsPayloads[ActionType] };
}[keyof ActionsPayloads];
