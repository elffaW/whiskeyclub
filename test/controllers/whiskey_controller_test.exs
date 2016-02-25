defmodule Whiskeyclub.WhiskeyControllerTest do
  use Whiskeyclub.ConnCase

  alias Whiskeyclub.Whiskey
  @valid_attrs %{age: "some content", name: "some content", proof: 42, type: "some content", wood: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, whiskey_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    whiskey = Repo.insert! %Whiskey{}
    conn = get conn, whiskey_path(conn, :show, whiskey)
    assert json_response(conn, 200)["data"] == %{"id" => whiskey.id,
      "name" => whiskey.name,
      "type" => whiskey.type,
      "proof" => whiskey.proof,
      "wood" => whiskey.wood,
      "age" => whiskey.age,
      "user_id" => whiskey.user_id}
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, whiskey_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, whiskey_path(conn, :create), whiskey: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Whiskey, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, whiskey_path(conn, :create), whiskey: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    whiskey = Repo.insert! %Whiskey{}
    conn = put conn, whiskey_path(conn, :update, whiskey), whiskey: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Whiskey, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    whiskey = Repo.insert! %Whiskey{}
    conn = put conn, whiskey_path(conn, :update, whiskey), whiskey: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    whiskey = Repo.insert! %Whiskey{}
    conn = delete conn, whiskey_path(conn, :delete, whiskey)
    assert response(conn, 204)
    refute Repo.get(Whiskey, whiskey.id)
  end
end
