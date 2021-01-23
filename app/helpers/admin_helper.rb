module AdminHelper
  def sidebar_link(path, title, icon_file)
    content_tag(:li, class: "w-full px-16 flex items-center py-2 mb-8 cursor-pointer #{'active-dash-link' if path.include? params[:controller]}") do
      concat image_pack_tag icon_file, class: "-ml-4", width: "25"
      concat link_to title, path, class: 'text-blue capitalize text-lg ml-6'
    end
  end
end
