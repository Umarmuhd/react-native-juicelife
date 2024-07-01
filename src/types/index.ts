// import * as React from 'react';

interface Response {
  status: string;
}
interface SuccessResponse extends Response {
  sessionId?: string;
}

export interface JuicelifeProps {
  workoutId: string;
  apiKey: string;
  metaData?: object;
  autoStart?: boolean;
  onCancel?: (Response: Response) => void;
  onSuccess: (SuccessResponse: SuccessResponse) => void;
}

export interface JuicelifeRef {
  startWorkout: () => void;
  cancelWorkout: () => void;
}
