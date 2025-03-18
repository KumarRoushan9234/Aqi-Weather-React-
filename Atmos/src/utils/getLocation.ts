export const getUserLocation = async (): Promise<string> => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const res = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
          );
          const data = await res.json();
          resolve(data[0]?.name || "New Delhi"); // Default: New Delhi
        } catch {
          resolve("New Delhi");
        }
      },
      () => resolve("New Delhi") // If user denies permission
    );
  });
};
