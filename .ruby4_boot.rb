# Boot shim for local Jekyll on Ruby 3.2+ / 4.x (Liquid still expects tainted?).
# Usage: RUBYOPT="-r$PWD/.ruby4_boot.rb" bundle exec jekyll serve
class Object
  def tainted?
    false
  end

  def taint
    self
  end

  def untaint
    self
  end
end
