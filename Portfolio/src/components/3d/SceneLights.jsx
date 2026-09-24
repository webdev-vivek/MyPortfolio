function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <pointLight
        position={[4, 3, 3]}
        intensity={35}
        distance={12}
        color="#ff9d45"
      />

      <pointLight
        position={[-5, 2, 1]}
        intensity={20}
        distance={12}
        color="#4d8dff"
      />

      <pointLight
        position={[0, -2, 4]}
        intensity={10}
        distance={8}
        color="#ffb45c"
      />

      <spotLight
        position={[0, 7, 3]}
        intensity={20}
        angle={0.5}
        penumbra={1}
        castShadow
      />
    </>
  );
}

export default SceneLights;