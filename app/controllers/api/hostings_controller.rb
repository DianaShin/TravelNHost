class Api::HostingsController < ApplicationController
  def create
    # debugger
    parsed_hosting_params = hosting_params;

    start_date = Time.parse(parsed_hosting_params[:start_date])
    end_date = Time.parse(parsed_hosting_params[:end_date])
    @hosting = Hosting.new({
      start_date: start_date,
      end_date: end_date,
      host_id: parsed_hosting_params[:host_id],
      guest_id: parsed_hosting_params[:guest_id],
      destination_id: parsed_hosting_params[:destination_id],
      status: parsed_hosting_params[:status]
      })
    @hosting = Hosting.new(hosting_params)
    # # debugger
      if @hosting.save
        render :show

      else
        render json: ["Start date and end date cannot be empty."], status: 422
      end
  end

  def index
    if current_user.id == params[:id].to_i
      @hostings = Hosting.where('hostings.host_id = ? or hostings.guest_id = ?', params[:id], params[:id])

      # @hostings = Hosting.all.select {|hosting| hosting.host_id == params[:id] || hosting.guest_id == params[:id]}

    else
      @hostings = []
    end
  end

  def show
    @hosting = Hosting.find_by(id: params[:id])
    if @hosting
      render :show
    else
      render json: ['Hosting not found'], status: 404
    end
  end

  private
  def hosting_params
    params.require(:hosting).
    permit(:host_id, :guest_id, :destination_id, :start_date, :end_date, :status, :hosting)
  end
end
