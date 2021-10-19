function enough(cap, on, wait) {
    if (cap - on <= wait) return wait - (cap-on)
    return 0
  }