export interface CinematographyProfile {
  techniqueId: string;
  techniqueName: string;
  headline: string;
  shortSuggestion: string;
  detailedInjection: string;
  keyTerms: string[];
  opticsOverview: string;
}

export const CINEMATOGRAPHY_PROFILES: Record<string, CinematographyProfile> = {
  'object-portal': {
    techniqueId: 'object-portal',
    techniqueName: 'Object Portal',
    headline: 'Coaxial Push-In & Aperture Occlusion',
    shortSuggestion: 'Push-in on prime 35mm T1.5 cine glass with 180° shutter; coaxial dolly acceleration into opening orifice with seamless rack focus to emerging scene interior.',
    detailedInjection: `CINEMATOGRAPHIC SPECIFICATIONS & TERMINOLOGY — OBJECT PORTAL:
- Camera Movement: Uninterrupted push-in on a coaxial dolly track, accelerating smoothly along the central lens axis toward the portal aperture.
- Lens & Aperture: 35mm T1.5 spherical cine prime; shallow depth-of-field with natural optical edge vignetting masking the frame perimeter.
- Shutter & Motion Cadence: 180° motion shutter angle to maintain natural motion blur cadence without stroboscopic artifacting.
- Optical Transition: At peak penetration, portal interior reaches 100% sensor gate coverage. Smooth rack focus transfers the focal plane from portal rim directly into the emerging interior geometry.
- Momentum Continuity: Continue forward dolly vector out of the portal matching departure speed, landing cleanly on the target frame composition.`,
    keyTerms: ['35mm T1.5 Prime', '180° Shutter Angle', 'Rack Focus', 'Coaxial Dolly', 'Parallax Acceleration', 'Aperture Occlusion'],
    opticsOverview: 'Prime 35mm · T1.5 · 180° Shutter · Coaxial Dolly Track'
  },

  'whip-pan': {
    techniqueId: 'whip-pan',
    techniqueName: 'Whip Pan',
    headline: 'Horizontal Azimuth Swish & Motion-Blur Occlusion',
    shortSuggestion: 'Kinetic swish pan along horizontal azimuth with 270° shutter angle; full-gate directional motion streaks hiding the seam, decelerating into target composition with zero camera rebound.',
    detailedInjection: `CINEMATOGRAPHIC SPECIFICATIONS & TERMINOLOGY — WHIP PAN:
- Camera Movement: High-speed swish pan strictly locked to the horizontal azimuth. Zero pitch drift, zero Dutch tilt, zero rotational roll.
- Lens & Shutter: 50mm spherical lens at T2.0; 270° extended shutter angle generating heavy, streak-free directional motion blur across 100% of the sensor gate.
- Optical Transition: Complete plate transformation occurs solely at peak angular velocity while motion blur fully obscures spatial detail.
- Deceleration Physics: Exponential braking curve matching departure kinetic momentum, settling dead-center on the arrival composition without camera recoil or gate bounce.`,
    keyTerms: ['270° Swish Pan', '50mm Spherical Glass', 'Full-Gate Motion Blur', 'Horizontal Azimuth', 'Zero Roll Drift', 'Exponential Deceleration'],
    opticsOverview: 'Spherical 50mm · T2.0 · 270° Shutter · Zero Roll Azimuth'
  },

  'match-cut-morph': {
    techniqueId: 'match-cut-morph',
    techniqueName: 'Match Morph',
    headline: 'Telephoto Compression & Sub-Pixel Silhouette Lock',
    shortSuggestion: 'Portrait compression on 85mm T2.0 telephoto lens; sub-pixel spatial registration on shared anchor silhouette, volumetric three-point lighting bridge, and circle-of-confusion bokeh continuity.',
    detailedInjection: `CINEMATOGRAPHIC SPECIFICATIONS & TERMINOLOGY — MATCH MORPH:
- Composition & Optics: Matched 85mm portrait telephoto compression; identical optical center point, nodal height, and subject silhouette registration.
- Focal Plane & Bokeh: Constant circle-of-confusion diameter across depth layers. Shallow depth of field maintaining subject separation from background.
- Lighting Harmonization: Volumetric key-to-fill luminance cross-fade radiating outward from the shared anchor geometry; color-temperature alignment between departure and arrival plates.
- Transformation Physics: Organic sub-pixel shape metamorphosis along silhouette contours without digital warping artifacts, melting, or jump cuts.`,
    keyTerms: ['85mm Telephoto Compression', 'Sub-Pixel Spatial Lock', 'Volumetric Key-to-Fill', 'Locked Optical Axis', 'Bokeh Continuity'],
    opticsOverview: 'Telephoto 85mm · T2.0 · Sub-Pixel Spatial Lock · Matched Bokeh'
  },

  'sky-drop': {
    techniqueId: 'sky-drop',
    techniqueName: 'Sky Drop',
    headline: 'Vertical Technocrane Boom & Zenith Inversion',
    shortSuggestion: 'Continuous vertical technocrane boom on 24mm wide glass at f/8; smooth 90° tilt into overhead canopy, maintaining momentum through zenith inversion down into arrival horizon.',
    detailedInjection: `CINEMATOGRAPHIC SPECIFICATIONS & TERMINOLOGY — SKY DROP:
- Camera Movement: Continuous vertical pedestal/technocrane boom upward into zenith; steady 90° tilt velocity until overhead canopy occupies entire sensor raster.
- Optics & Depth: 24mm wide cine prime, deep depth of field (f/8) capturing atmospheric gradient, clouds, and diffuse volumetric rays.
- Optical Inversion: Camera momentum seamlessly preserved through overhead canopy texture; coordinated downward counter-boom descent into arrival scene.
- Landing: Decelerates from vertical tilt into level two-point perspective, matching optical horizon line of the arrival keyframe.`,
    keyTerms: ['24mm Wide Glass', 'Technocrane Boom', 'Zenith Inversion', 'Deep Field (f/8)', 'Full Raster Saturation', 'Momentum Matching'],
    opticsOverview: 'Wide 24mm · f/8 Deep Field · Technocrane Boom · Zenith Inversion'
  },

  'through-the-crowd': {
    techniqueId: 'through-the-crowd',
    techniqueName: 'Foreground Wipe',
    headline: 'Steadicam Lateral Trucking & Bokeh Curtain Occlusion',
    shortSuggestion: 'Steadicam lateral tracking on 50mm T1.3 cine prime at shallow depth of field; minimum object distance (MOD) foreground blur curtain hiding the seam, with instant rack focus to arrival plate.',
    detailedInjection: `CINEMATOGRAPHIC SPECIFICATIONS & TERMINOLOGY — FOREGROUND WIPE:
- Camera Movement: Steadicam lateral trucking shot or tracking pan with constant horizontal velocity.
- Optics & Occlusion: 50mm T1.3 prime at wide aperture; foreground wipe element crosses inside Minimum Object Distance (MOD), producing an out-of-focus bokeh curtain.
- Optical Transition: Complete 100% frame occlusion at midpoint; background plate transitions during total optical masking.
- Focal Retention: Fast, precise rack focus onto arrival scene elements as the foreground obstacle clears the frame gate.`,
    keyTerms: ['Steadicam Lateral Trucking', '50mm T1.3 Shallow DoF', 'Minimum Object Distance (MOD)', 'Bokeh Curtain', 'Instant Rack Focus'],
    opticsOverview: 'Prime 50mm · T1.3 · Steadicam Trucking · MOD Bokeh Curtain'
  },

  'time-machine': {
    techniqueId: 'time-machine',
    techniqueName: 'Time Machine',
    headline: 'Locked Nodal Mount & Intervalometer Solar Ramping',
    shortSuggestion: 'Locked-off tripod mount on 35mm prime with zero nodal drift; intervalometer exposure ramping, sweeping solar shadow trajectory, and Kelvin color temperature shift across time.',
    detailedInjection: `CINEMATOGRAPHIC SPECIFICATIONS & TERMINOLOGY — TIME MACHINE:
- Camera Mount: Rigid locked-off tripod base with zero nodal drift, zero vibration, and perfectly registered horizon landmarks.
- Optics & Staging: 35mm prime lens; strict geometric alignment preserved throughout the temporal bridge.
- Shutter & Temporal Mechanics: Rapid intervalometer exposure ramping; accelerated solar azimuth trajectory and long-shadow sweeping dynamics.
- Photometric Evolution: Gradual Kelvin color temperature transition and atmospheric evolution settling smoothly into the target era.`,
    keyTerms: ['Locked Nodal Mount', '35mm Prime', 'Intervalometer Phase', 'Exposure Ramping', 'Solar Shadow Trajectory', 'Kelvin Temp Shift'],
    opticsOverview: 'Prime 35mm · Locked Nodal Mount · Intervalometer Ramping'
  },

  'directors-choice': {
    techniqueId: 'directors-choice',
    techniqueName: "Director's Choice",
    headline: 'Dynamic Master Shot & Harmonized Optical Motion',
    shortSuggestion: 'Matched 40mm focal length with 180° cinematic shutter cadence, unbroken single-take camera momentum, volumetric key-to-fill lighting bridge, and sub-pixel geometric continuity.',
    detailedInjection: `CINEMATOGRAPHIC SPECIFICATIONS & TERMINOLOGY — DIRECTOR'S CHOICE:
- Optics: Matched 40mm focal length with consistent circle of confusion and 180° shutter motion cadence.
- Camera Trajectory: Unbroken, continuous single-take camera momentum uniting departure and arrival compositions.
- Lighting & Focus: Coordinated volumetric lighting bridge and seamless depth-of-field transition without visible cuts or crossfades.`,
    keyTerms: ['40mm Master Lens', '180° Shutter Cadence', 'Continuous Momentum', 'Volumetric Light Bridge', 'Geometric Continuity'],
    opticsOverview: 'Master 40mm · 180° Shutter · Volumetric Light Bridge'
  }
};

export function getCinematographyProfile(techniqueId: string | null): CinematographyProfile {
  if (techniqueId && CINEMATOGRAPHY_PROFILES[techniqueId]) {
    return CINEMATOGRAPHY_PROFILES[techniqueId];
  }
  return CINEMATOGRAPHY_PROFILES['directors-choice'];
}
