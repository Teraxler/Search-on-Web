import React, { useEffect, useState } from "react";

export default function useLogger(state) {
  useEffect(() => {
    console.log("State update", state);
  }, [state]);
}
