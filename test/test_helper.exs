ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Whiskeyclub.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Whiskeyclub.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Whiskeyclub.Repo)

