export const getLesserEvil = (threat1, threat2) => {
  if (threat1.evilFactor < threat2.evilFactor) {
    // return something
    return threat1
    } else {
    // return something else
    return threat2
    }
}