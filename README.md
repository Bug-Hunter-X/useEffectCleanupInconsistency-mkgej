# React useEffect Cleanup Function Issue

This repository demonstrates a seemingly simple React component with a `useEffect` hook, where the cleanup function is not always running as expected. The issue is that in specific scenarios, the component re-renders without the cleanup function being triggered, even when the dependencies array is correctly defined. This leads to potential memory leaks or unexpected behavior.  The solution explains how to address this inconsistency.

## Problem Description
The provided `bug.js` file shows a counter component.  The `useEffect` hook includes a cleanup function that logs 'Cleanup function running'. However, this message doesn't always appear when expected during component updates or unmounting. 

## Solution
The solution provided in `bugSolution.js` addresses this problem by ensuring the cleanup function runs reliably.