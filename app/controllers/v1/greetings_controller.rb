class V1::GreetingsController < ApplicationController
  def index
    render json: { :greetings => [
      {
        :name => 'blabla',
        :guid => '234567'
      }
    ] }.to_json
  end
  
end