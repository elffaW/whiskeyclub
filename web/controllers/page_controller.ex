defmodule Whiskeyclub.PageController do
  use Whiskeyclub.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
